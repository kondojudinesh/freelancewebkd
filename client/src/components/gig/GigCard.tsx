import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart } from 'lucide-react';

interface GigCardProps {
  gig: {
    id: number;
    title: string;
    seller: string;
    sellerAvatar: string;
    price: number;
    rating: number;
    reviews: number;
    image: string;
    category: string;
    deliveryTime: string;
  };
}

const GigCard: React.FC<GigCardProps> = ({ gig }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700 overflow-hidden">
      <Link to={`/gig/${gig.id}`}>
        <div className="relative">
          <img
            src={gig.image}
            alt={gig.title}
            className="w-full h-48 object-cover"
          />
          <button className="absolute top-3 right-3 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
            <Heart className="w-4 h-4 text-gray-600" />
          </button>
          <div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 text-white text-xs rounded">
            {gig.category}
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex items-center space-x-2 mb-2">
            <img
              src={gig.sellerAvatar}
              alt={gig.seller}
              className="w-6 h-6 rounded-full"
            />
            <span className="text-sm text-gray-600 dark:text-gray-400">@{gig.seller}</span>
          </div>
          
          <h3 className="font-medium text-gray-900 dark:text-white mb-2 line-clamp-2">
            {gig.title}
          </h3>
          
          <div className="flex items-center space-x-1 mb-3">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">{gig.rating}</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">({gig.reviews})</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400">{gig.deliveryTime}</span>
            <div className="text-right">
              <span className="text-sm text-gray-500 dark:text-gray-400">Starting at</span>
              <div className="text-lg font-bold text-gray-900 dark:text-white">${gig.price}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default GigCard;