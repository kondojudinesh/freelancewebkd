import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Button from '../common/Button';

const HeroSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="relative bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Find the perfect
              <span className="text-orange-500"> freelance</span>
              <br />
              services for your business
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Work with talented freelancers to get your project done right. 
              From design to development, find experts for any task.
            </p>

            {/* Search Bar */}
            <div className="relative mb-8">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Try 'logo design' or 'website development'"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 pl-4 pr-12 py-4 text-lg border-2 border-gray-300 dark:border-gray-600 rounded-l-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                />
                <Button className="rounded-l-none px-8 py-4 text-lg">
                  <Search className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Popular Searches */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">Popular:</span>
              {['Logo Design', 'Web Development', 'Content Writing', 'Video Editing'].map((tag) => (
                <button
                  key={tag}
                  className="px-3 py-1 text-sm bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full border border-gray-300 dark:border-gray-600 hover:border-orange-500 hover:text-orange-500 transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Freelancer working"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400 text-sm">✓</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Project Completed</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">2 minutes ago</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <img
                  src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150"
                  alt="Client"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Sarah M.</p>
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-sm">★★★★★</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">5.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;