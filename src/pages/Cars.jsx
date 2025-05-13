
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import CarListItem from '../components/CarListItem';
import NotFoundCar from '../components/NotFoundCar';
import { Button } from '../components/ui/button';
import { Filter, SlidersHorizontal } from 'lucide-react';

const Cars = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialSearchQuery = searchParams.get('search') || '';
  const initialCategoryFilter = searchParams.get('category') || '';

  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [categoryFilter, setCategoryFilter] = useState(initialCategoryFilter);
  const [showFilters, setShowFilters] = useState(false);
  
  // Sample cars data
  const allCars = [
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
    },
    {
      id: 4,
      name: 'Volkswagen Golf',
      type: 'Hatchback',
      price: 2000,
      year: 2022,
      seats: 5,
    },
    {
      id: 5,
      name: 'Mercedes-Benz S-Class',
      type: 'Luxury',
      price: 8000,
      year: 2023,
      seats: 5,
    },
    {
      id: 6,
      name: 'Ford F-150',
      type: 'Truck',
      price: 4500,
      year: 2022,
      seats: 5,
    },
  ];

  // Filter cars based on search and category
  const filteredCars = allCars.filter(car => {
    const matchesSearch = searchQuery ? 
      car.name.toLowerCase().includes(searchQuery.toLowerCase()) : true;
    
    const matchesCategory = categoryFilter ? 
      car.type.toLowerCase() === categoryFilter.toLowerCase() : true;
    
    return matchesSearch && matchesCategory;
  });

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (category) => {
    setCategoryFilter(category === categoryFilter ? '' : category);
  };

  // Get unique categories for the filter
  const categories = [...new Set(allCars.map(car => car.type))];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-background">
        {/* Search and Filter Bar */}
        <div className="bg-card shadow-sm border-b">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-foreground">Available Cars</h1>
              <Button 
                variant="outline" 
                onClick={() => setShowFilters(!showFilters)}
                className="flex gap-2 items-center"
              >
                <Filter className="h-4 w-4" />
                <span className="hidden md:inline">Filters</span>
              </Button>
            </div>
            
            <SearchBar onSearch={handleSearch} />
            
            {showFilters && (
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <div className="flex items-center mb-2">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  <h3 className="font-medium">Filter by category</h3>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {categories.map(category => (
                    <Button
                      key={category}
                      variant={categoryFilter === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleCategoryChange(category)}
                      className="text-sm"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Cars Listing */}
        <div className="container mx-auto px-4 py-8">
          {filteredCars.length > 0 ? (
            <div className="flex flex-col space-y-6">
              {filteredCars.map((car) => (
                <CarListItem key={car.id} car={car} />
              ))}
            </div>
          ) : (
            <NotFoundCar searchQuery={searchQuery} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cars;
