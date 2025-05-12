
import React from 'react';

const AboutUsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            Founded in 2010, RidePilot began with a simple idea: why should anyone have to buy a car when they can rent the perfect vehicle for any occasion? What started as a small fleet of just five vehicles has grown into one of the region's most trusted car rental services.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Our mission is to provide affordable, reliable, and convenient car rental solutions that give our customers the freedom to go anywhere, anytime. We believe in transparent pricing, exceptional customer service, and vehicles that are always meticulously maintained.
          </p>
          <p className="text-lg text-gray-700">
            Today, we serve thousands of satisfied customers each year, from business travelers to families on vacation to individuals who simply need a reliable vehicle for a day or two. No matter who you are or where you're going, RidePilot is here to keep you moving.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-gray-600">Years in Business</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-gray-600">Vehicles</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
