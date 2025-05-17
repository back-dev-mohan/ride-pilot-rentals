
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import SearchBar from '../components/SearchBar';
import CarCategoriesSection from '../components/CarCategoriesSection';
import FeaturedCarsSection from '../components/FeaturedCarsSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import AboutUsSection from '../components/AboutUsSection';
import Sidebar from '../components/Sidebar';

const Index = () => {
  const handleSearch = (query) => {
    console.log("Searching for:", query);
    // In a real app, this would redirect to search results or filter cars
    window.location.href = `/cars?search=${query}`;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        {/* Sidebar on the left */}
        <div className="hidden md:block">
          <Sidebar />
        </div>
        
        <main className="w-full">
          <HeroSection />
          
          {/* Improved search section with better responsive layout */}
          <div className="py-8 bg-background border-b border-border shadow-sm">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-2xl font-bold text-center mb-4">Find Your Perfect Rental</h2>
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>
          
          {/* Main content sections with consistent spacing */}
          <div className="container mx-auto px-4 py-8">
            <CarCategoriesSection />
            <FeaturedCarsSection />
            <AboutUsSection />
            <WhyChooseUsSection />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
