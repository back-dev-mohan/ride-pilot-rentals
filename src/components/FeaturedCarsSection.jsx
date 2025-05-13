
import React from 'react';
import { Link } from 'react-router-dom';
import CarListItem from './CarListItem';
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
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-foreground">Featured Cars</h2>
          <Link to="/cars">
            <Button variant="outline">View all cars</Button>
          </Link>
        </div>
        <div className="flex flex-col space-y-6">
          {featuredCars.map((car) => (
            <CarListItem key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCarsSection;
