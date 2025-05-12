
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import SearchBar from '../components/SearchBar';
import CarCategoriesSection from '../components/CarCategoriesSection';
import FeaturedCarsSection from '../components/FeaturedCarsSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import AboutUsSection from '../components/AboutUsSection';

const Index = () => {
  const handleSearch = (query) => {
    console.log("Searching for:", query);
    // In a real app, this would redirect to search results or filter cars
    window.location.href = `/cars?search=${query}`;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        
        {/* Search Section */}
        <div className="py-6 bg-white shadow-md">
          <div className="container mx-auto px-4">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
        
        <CarCategoriesSection />
        <FeaturedCarsSection />
        <AboutUsSection />
        <WhyChooseUsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
