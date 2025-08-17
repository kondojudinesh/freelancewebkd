import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">FreeLance</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              The world's largest freelance marketplace. Connect with skilled professionals for any project.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/gigs?category=design" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 text-sm">Design</Link></li>
              <li><Link to="/gigs?category=writing" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 text-sm">Writing</Link></li>
              <li><Link to="/gigs?category=video" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 text-sm">Video</Link></li>
              <li><Link to="/gigs?category=programming" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 text-sm">Programming</Link></li>
              <li><Link to="/gigs?category=marketing" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 text-sm">Marketing</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 text-sm">Help Center</Link></li>
              <li><Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 text-sm">Contact Us</Link></li>
              <li><Link to="/trust-safety" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 text-sm">Trust & Safety</Link></li>
              <li><Link to="/community" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 text-sm">Community</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 text-sm">About</Link></li>
              <li><Link to="/careers" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 text-sm">Careers</Link></li>
              <li><Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 text-sm">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 text-sm">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 sm:mb-0">
              © 2024 FreeLance. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-gray-400" />
                <select className="text-sm text-gray-600 dark:text-gray-400 bg-transparent border-none focus:outline-none">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                USD ($)
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;