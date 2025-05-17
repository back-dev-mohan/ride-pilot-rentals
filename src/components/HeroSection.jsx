
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-slate-800 dark:to-slate-900 text-white">
      {/* Hero content */}
      <div className="container mx-auto px-4 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-2xl mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Drive Your Dream Car Without Buying It
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-100 dark:text-slate-300">
            Why invest in a new car when you can rent the perfect vehicle for any occasion? 
            Affordable rates, flexible terms, and an extensive fleet at your fingertips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/cars">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 w-full sm:w-auto">
                Browse Cars <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700 dark:hover:bg-slate-700 w-full sm:w-auto">
                How It Works
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Placeholder - Admin will add image through API */}
        <div className="hidden lg:block relative w-[400px] h-[300px]">
          <div className="absolute top-0 right-0 rounded-lg shadow-xl bg-white/10 w-full h-full flex items-center justify-center text-white/70 text-sm border border-white/20 backdrop-blur-sm">
            <div className="text-center px-4">
              <p className="mb-2">Car Image Placeholder</p>
              <p className="text-xs opacity-70">(Will be populated from API)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Abstract background pattern */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <svg className="absolute right-0 top-0 h-full transform translate-x-1/2 text-blue-400 dark:text-slate-700 opacity-10" 
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
