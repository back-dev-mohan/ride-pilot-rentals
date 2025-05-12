
import React from 'react';
import CarCard from './CarCard';

// Placeholder data for featured cars
const featuredCars = [
  {
    id: 1,
    name: 'Toyota Camry',
    type: 'Sedan',
    price: 45,
    year: 2022,
    seats: 5,
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: 2,
    name: 'Honda CR-V',
    type: 'SUV',
    price: 65,
    year: 2023,
    seats: 7,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: 3,
    name: 'BMW 3 Series',
    type: 'Luxury',
    price: 95,
    year: 2023,
    seats: 5,
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: 4,
    name: 'Volkswagen Golf',
    type: 'Hatchback',
    price: 40,
    year: 2022,
    seats: 5,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  }
];

const FeaturedCarsSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Cars</h2>
          <a href="/cars" className="text-primary font-medium hover:underline">
            View all cars
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCarsSection;
