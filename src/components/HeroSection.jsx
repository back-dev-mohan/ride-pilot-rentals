
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-slate-800 dark:to-slate-900 text-white">
      {/* Hero content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Drive Your Dream Car Without Buying It
          </h1>
          <p className="text-lg mb-8 text-blue-100 dark:text-slate-300 max-w-xl mx-auto">
            Why invest in a new car when you can rent the perfect vehicle for any occasion? 
            Affordable rates, flexible terms, and an extensive fleet at your fingertips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cars">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600 w-full sm:w-auto">
                Browse Cars <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700 dark:hover:bg-slate-600 w-full sm:w-auto">
                How It Works
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
