
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">RidePilot</Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-800 hover:text-primary transition-colors">Home</Link>
          <Link to="/cars" className="text-gray-800 hover:text-primary transition-colors">Cars</Link>
          <Link to="/how-it-works" className="text-gray-800 hover:text-primary transition-colors">How It Works</Link>
          <Link to="/contact" className="text-gray-800 hover:text-primary transition-colors">Contact</Link>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <Button variant="outline" size="sm">Login</Button>
          </Link>
          <Link to="/signup">
            <Button size="sm">Sign Up</Button>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-800 hover:text-primary transition-colors" onClick={toggleMenu}>Home</Link>
            <Link to="/cars" className="text-gray-800 hover:text-primary transition-colors" onClick={toggleMenu}>Cars</Link>
            <Link to="/how-it-works" className="text-gray-800 hover:text-primary transition-colors" onClick={toggleMenu}>How It Works</Link>
            <Link to="/contact" className="text-gray-800 hover:text-primary transition-colors" onClick={toggleMenu}>Contact</Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Link to="/login" onClick={toggleMenu}>
                <Button variant="outline" className="w-full">Login</Button>
              </Link>
              <Link to="/signup" onClick={toggleMenu}>
                <Button className="w-full">Sign Up</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
