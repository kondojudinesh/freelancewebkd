import React from 'react';
import { gigs } from '../../data/mockData';
import GigCard from '../gig/GigCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FeaturedGigs: React.FC = () => {
  const scrollLeft = () => {
    const container = document.getElementById('gigs-scroll');
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById('gigs-scroll');
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Top-Rated Services
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Discover the most popular freelance services
            </p>
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={scrollLeft}
              className="p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-600"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
            <button
              onClick={scrollRight}
              className="p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-600"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>

        <div
          id="gigs-scroll"
          className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {gigs.map((gig) => (
            <div key={gig.id} className="flex-shrink-0 w-80">
              <GigCard gig={gig} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGigs;