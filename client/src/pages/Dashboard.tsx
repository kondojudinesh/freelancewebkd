import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import api from '../utilis/api';
import GigCard from '../components/gig/GigCard';
import Button from '../components/common/Button';

const Dashboard = () => {
  const [gigs, setGigs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchUserGigs = async () => {
    setLoading(true);
    setError('');
    const user = (await supabase.auth.getUser()).data.user;
    if (!user) {
      setError('You must be logged in to view your gigs.');
      setLoading(false);
      return;
    }
    try {
      const { data } = await api.get('/gigs');
      const userGigs = data.filter((gig) => gig.user_id === user.id);
      setGigs(userGigs);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch gigs');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserGigs();
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Your Gigs</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {loading ? (
        <p className="text-gray-600 dark:text-gray-400">Loading gigs...</p>
      ) : gigs.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">No gigs posted yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gigs.map((gig) => (
            <GigCard key={gig.id} gig={gig} />
          ))}
        </div>
      )}
      <div className="mt-8">
        <Button onClick={() => fetchUserGigs()}>Refresh</Button>
      </div>
    </div>
  );
};

export default Dashboard;
