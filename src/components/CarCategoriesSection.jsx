
import React from 'react';
import { Link } from 'react-router-dom';
import { AspectRatio } from './ui/aspect-ratio';

const categories = [
  {
    id: 'sedan',
    name: 'Sedan',
    description: 'Comfortable and fuel-efficient',
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: 'suv',
    name: 'SUV',
    description: 'Spacious and versatile',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: 'luxury',
    name: 'Luxury',
    description: 'Premium experience',
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: 'hatchback',
    name: 'Hatchback',
    description: 'Compact and practical',
    image: 'https://images.unsplash.com/photo-1471444928139-48c5bf5173f8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  }
];

const CarCategoriesSection = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Browse by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/cars?category=${category.id}`}
              className="group"
            >
              <div className="rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-md transition-all duration-300 group-hover:shadow-xl">
                <AspectRatio ratio={4/3} className="w-full max-w-[600px] mx-auto">
                  <img 
                    src={category.image.replace('w=800', 'w=600')} 
                    alt={category.name} 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    width={600}
                    height={450}
                    loading="lazy"
                  />
                </AspectRatio>
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarCategoriesSection;
