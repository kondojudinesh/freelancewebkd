import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import { ArrowRight, Users, Briefcase } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl opacity-90">
            Join millions of people who choose FreeLance for their business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Buyer CTA */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">I need work done</h3>
              <p className="text-white/80 mb-6">
                Find talented freelancers for your project. Post a job and get started in minutes.
              </p>
              <Link to="/signup?type=buyer">
                <Button
                  variant="secondary"
                  className="w-full bg-white text-orange-500 hover:bg-gray-100 font-semibold"
                  size="lg"
                >
                  Join as Buyer
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Freelancer CTA */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">I want to work</h3>
              <p className="text-white/80 mb-6">
                Showcase your skills and start earning. Create your profile and find clients.
              </p>
              <Link to="/signup?type=freelancer">
                <Button
                  variant="outline"
                  className="w-full border-2 border-white text-white hover:bg-white hover:text-orange-500 font-semibold"
                  size="lg"
                >
                  Join as Freelancer
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl font-bold text-white mb-2">2M+</div>
            <div className="text-white/80">Active Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">500K+</div>
            <div className="text-white/80">Projects Completed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">50K+</div>
            <div className="text-white/80">Freelancers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">4.8★</div>
            <div className="text-white/80">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;