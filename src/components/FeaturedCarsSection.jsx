
import React from 'react';
import { Link } from 'react-router-dom';
import CarCard from './CarCard';
import { Button } from './ui/button';

// Placeholder data for featured cars with prices
const featuredCars = [
  {
    id: 1,
    name: 'Toyota Camry',
    type: 'Sedan',
    price: 2500,
    year: 2022,
    seats: 5,
  },
  {
    id: 2,
    name: 'Honda CR-V',
    type: 'SUV',
    price: 3500,
    year: 2023,
    seats: 7,
  },
  {
    id: 3,
    name: 'BMW 3 Series',
    type: 'Luxury',
    price: 5000,
    year: 2023,
    seats: 5,
  }
];

const FeaturedCarsSection = () => {
  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-foreground">Featured Cars</h2>
          <Link to="/cars">
            <Button variant="outline" size="sm">View all cars</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCars.map((car) => (
            <div key={car.id} className="h-full">
              <CarCard car={car} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCarsSection;
