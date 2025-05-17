
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from './ui/badge';
import { Car } from 'lucide-react';

const categories = [
  {
    id: 'sedan',
    name: 'Sedan',
    description: 'Comfortable and fuel-efficient'
  },
  {
    id: 'suv',
    name: 'SUV',
    description: 'Spacious and versatile'
  },
  {
    id: 'luxury',
    name: 'Luxury',
    description: 'Premium experience'
  },
  {
    id: 'hatchback',
    name: 'Hatchback',
    description: 'Compact and practical'
  }
];

const CarCategoriesSection = () => {
  return (
    <section className="py-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Browse by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/cars?category=${category.id}`}
              className="group"
            >
              <div className="rounded-lg p-4 bg-white dark:bg-gray-800 shadow-md transition-all duration-300 group-hover:shadow-xl flex flex-col items-center">
                <div className="mb-2 bg-primary/10 p-3 rounded-full">
                  <Car className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-1">{category.name}</h3>
                <Badge variant="secondary" className="mt-1">{category.description}</Badge>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarCategoriesSection;
