import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import api from '../utilis/api';
import Button from '../components/common/Button';

const CreateGig = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    delivery_time: '',
    image_url: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const {
      title,
      description,
      price,
      category,
      delivery_time,
      image_url
    } = formData;

    const user = (await supabase.auth.getUser()).data.user;
    if (!user) {
      setError('You must be logged in to create a gig.');
      setLoading(false);
      return;
    }

    try {
      await api.post('/gigs', {
        user_id: user.id,
        title,
        description,
        price: parseFloat(price),
        category,
        delivery_time: parseInt(delivery_time),
        image_url
      });
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      setError('Failed to create gig.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">Create a New Gig</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />
        <input
          name="price"
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />
        <input
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />
        <input
          name="delivery_time"
          type="number"
          placeholder="Delivery Time (days)"
          value={formData.delivery_time}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />
        <input
          name="image_url"
          placeholder="Image URL (optional)"
          value={formData.image_url}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
        <Button type="submit" disabled={loading}>
          {loading ? 'Creating...' : 'Create Gig'}
        </Button>
      </form>
    </div>
  );
};

export default CreateGig;
