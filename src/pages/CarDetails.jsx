
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Users, DollarSign, Check } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { useToast } from '../hooks/use-toast';

const CarDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // In a real app, this would be fetched from an API
  const car = {
    id: parseInt(id),
    name: 'Toyota Camry',
    type: 'Sedan',
    price: 45,
    year: 2022,
    seats: 5,
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    description: 'The Toyota Camry is a stylish and reliable sedan with excellent fuel economy, making it perfect for city driving or long road trips. This model comes with advanced safety features and modern amenities for a comfortable ride.',
    features: [
      'Bluetooth Connectivity',
      'Backup Camera',
      'Cruise Control',
      'Keyless Entry',
      'USB Charging Ports',
      'Apple CarPlay & Android Auto',
      'Automatic Climate Control'
    ],
    location: 'Downtown Branch',
    available: true
  };

  const handleBooking = (e) => {
    e.preventDefault();
    if (!startDate || !endDate) {
      toast({
        title: "Error",
        description: "Please select pickup and return dates",
        variant: "destructive"
      });
      return;
    }

    // Calculate total days
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;
    
    const totalPrice = car.price * diffDays;

    toast({
      title: "Booking Successful!",
      description: `Your ${car.name} is booked for ${diffDays} days. Total: $${totalPrice}`,
    });
  };

  if (!car) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Car not found</h2>
            <Link to="/cars" className="text-primary hover:underline mt-4 block">
              Browse other cars
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto py-8 px-4">
          {/* Navigation */}
          <div className="mb-6">
            <Link to="/cars" className="text-primary hover:underline">← Back to all cars</Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Car Images */}
            <div className="aspect-[16/9] overflow-hidden bg-gray-100">
              <img 
                src={car.image} 
                alt={car.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6">
              {/* Car Header */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium mb-2">
                    {car.type}
                  </div>
                  <h1 className="text-3xl font-bold">{car.name}</h1>
                  <div className="flex items-center mt-2 text-gray-600">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{car.year}</span>
                    <Users className="h-4 w-4 mr-1" />
                    <span>{car.seats} seats</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="flex items-center text-2xl font-bold text-primary">
                    <DollarSign className="h-5 w-5" />
                    {car.price}
                    <span className="text-sm font-normal text-gray-600 ml-1">/day</span>
                  </div>
                </div>
              </div>
              
              {/* Car Description */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Description</h2>
                <p className="text-gray-600">{car.description}</p>
              </div>
              
              {/* Features */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Features</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {car.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Booking Form */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Make a Reservation</h2>
                <form onSubmit={handleBooking}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="pickup-date" className="block text-sm font-medium text-gray-700 mb-1">
                        Pickup Date
                      </label>
                      <input
                        type="date"
                        id="pickup-date"
                        className="w-full p-2 border rounded-md"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="return-date" className="block text-sm font-medium text-gray-700 mb-1">
                        Return Date
                      </label>
                      <input
                        type="date"
                        id="return-date"
                        className="w-full p-2 border rounded-md"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        min={startDate || new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="pickup-location" className="block text-sm font-medium text-gray-700 mb-1">
                      Pickup Location
                    </label>
                    <select
                      id="pickup-location"
                      className="w-full p-2 border rounded-md"
                      defaultValue={car.location}
                      required
                    >
                      <option value={car.location}>{car.location}</option>
                      <option value="Airport Branch">Airport Branch</option>
                      <option value="Suburban Branch">Suburban Branch</option>
                    </select>
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={!car.available}
                  >
                    {car.available ? 'Reserve Now' : 'Currently Unavailable'}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CarDetails;
