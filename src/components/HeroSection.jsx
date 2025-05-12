
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      {/* Hero content */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Drive Your Dream Car Without Buying It
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-100">
            Why invest in a new car when you can rent the perfect vehicle for any occasion? 
            Affordable rates, flexible terms, and an extensive fleet at your fingertips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/cars">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                Browse Cars <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                How It Works
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Abstract background pattern */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <svg className="absolute right-0 top-0 h-full transform translate-x-1/2 text-blue-400 opacity-20" 
          width="404" height="784" fill="none" viewBox="0 0 404 784">
          <defs>
            <pattern id="pattern-squares" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#pattern-squares)" />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
