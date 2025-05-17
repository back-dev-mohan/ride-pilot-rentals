
import React, { useState } from 'react';
import { Menu, X, User, Home, Car, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { useAuth } from '../context/AuthContext';
import ThemeToggle from './ThemeToggle';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from "./ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "./ui/dropdown-menu";

// Car categories data
const carCategories = [
  { name: "Sedan", id: "sedan" },
  { name: "SUV", id: "suv" },
  { name: "Luxury", id: "luxury" },
  { name: "Hatchback", id: "hatchback" },
  { name: "Truck", id: "truck" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-2xl font-bold text-primary">RidePilot</Link>
          
          {/* Desktop Navigation - Simplified with single dropdown */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/cars" className="flex items-center px-4 py-2 text-foreground hover:text-primary hover-transition">
                    <Car className="w-4 h-4 mr-2" />
                    Browse Cars
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-4 py-2">
                    <Car className="w-4 h-4 mr-2" />
                    Categories
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4 grid-cols-2">
                      {carCategories.map((category) => (
                        <Link
                          key={category.id}
                          to={`/cars?category=${category.id}`}
                          className="flex items-center p-3 rounded-lg hover:bg-accent transition-colors"
                        >
                          <div>
                            <div className="font-medium">{category.name}</div>
                            <div className="text-sm text-muted-foreground">
                              Browse {category.name.toLowerCase()} models
                            </div>
                          </div>
                        </Link>
                      ))}
                      <Link 
                        to="/cars"
                        className="col-span-2 flex justify-center mt-2 pt-2 border-t border-border text-primary hover:underline"
                      >
                        View All Cars
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-4 py-2">
                    <Info className="w-4 h-4 mr-2" />
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[220px] gap-1 p-4">
                      <li>
                        <Link to="/about" className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link to="/how-it-works" className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent">
                          How It Works
                        </Link>
                      </li>
                      <li>
                        <Link to="/contact" className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Single theme toggle */}
          <ThemeToggle />
          
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span className="text-sm">{user?.name?.split(' ')[0]}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-background">
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="w-full">My Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={logout}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center space-x-2">
              <Link to="/login">
                <Button variant="outline" size="sm">Login</Button>
              </Link>
              <Link to="/signup">
                <Button size="sm">Sign Up</Button>
              </Link>
            </div>
          )}
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-foreground">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background py-4 px-4 shadow-md animate-fade-in">
          <nav className="flex flex-col space-y-3">
            <Link to="/" className="flex items-center gap-2 px-3 py-2 hover:bg-accent rounded-md transition-colors" onClick={toggleMenu}>
              <Home className="h-4 w-4" />
              Home
            </Link>
            
            <Link to="/cars" className="flex items-center gap-2 px-3 py-2 hover:bg-accent rounded-md transition-colors" onClick={toggleMenu}>
              <Car className="h-4 w-4" />
              Browse Cars
            </Link>
            
            {/* Mobile Categories Dropdown */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 px-3 py-2 font-medium">
                <Car className="h-4 w-4" />
                Categories
              </div>
              <div className="pl-9 space-y-1">
                {carCategories.map((category) => (
                  <Link 
                    key={category.id}
                    to={`/cars?category=${category.id}`}
                    className="block py-2 px-2 text-foreground hover:bg-accent hover:text-primary rounded-md transition-colors"
                    onClick={toggleMenu}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link to="/how-it-works" className="flex items-center gap-2 px-3 py-2 hover:bg-accent rounded-md transition-colors" onClick={toggleMenu}>
              <Info className="h-4 w-4" />
              How It Works
            </Link>
            
            <Link to="/contact" className="flex items-center gap-2 px-3 py-2 hover:bg-accent rounded-md transition-colors" onClick={toggleMenu}>
              Contact
            </Link>
            
            <div className="pt-2 border-t border-border mt-2">
              {isAuthenticated ? (
                <>
                  <Link to="/profile" onClick={toggleMenu} className="block w-full py-2 px-3 flex items-center gap-2 hover:bg-accent rounded-md transition-colors">
                    <User className="h-4 w-4" />
                    My Profile
                  </Link>
                  <Button 
                    variant="ghost"
                    className="w-full justify-start mt-2 px-3 text-destructive hover:text-destructive hover:bg-destructive/10"
                    onClick={() => {
                      logout();
                      toggleMenu();
                    }}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <div className="flex flex-col space-y-2 pt-2">
                  <Link to="/login" onClick={toggleMenu} className="w-full">
                    <Button variant="outline" className="w-full">Login</Button>
                  </Link>
                  <Link to="/signup" onClick={toggleMenu} className="w-full">
                    <Button className="w-full">Sign Up</Button>
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
