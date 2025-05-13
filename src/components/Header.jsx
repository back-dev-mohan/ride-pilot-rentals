
import React, { useState } from 'react';
import { Menu, X, User } from 'lucide-react';
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
        <Link to="/" className="text-2xl font-bold text-primary">RidePilot</Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="px-4 py-2 hover:bg-accent transition-colors flex items-center">
                Explore
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-52">
              <DropdownMenuItem asChild>
                <Link to="/" className="w-full">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/how-it-works" className="w-full">How It Works</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/contact" className="w-full">Contact</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          {/* Categories Dropdown */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[240px] gap-2 p-4 shadow-lg">
                    {carCategories.map((category) => (
                      <li key={category.id}>
                        <Link
                          to={`/cars?category=${category.id}`}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          {category.name}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link 
                        to="/cars"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-primary font-medium hover:bg-accent hover:text-accent-foreground"
                      >
                        View All Cars
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        
        <div className="hidden md:flex items-center space-x-6">
          <ThemeToggle />
          
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span className="text-sm">{user?.name?.split(' ')[0]}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="w-full">My Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={logout}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center space-x-3">
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
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-foreground">
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background py-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-foreground hover:text-primary transition-colors px-2 py-1.5 rounded-md" onClick={toggleMenu}>Home</Link>
            
            {/* Mobile Categories Dropdown */}
            <div className="relative">
              <div className="flex items-center justify-between cursor-pointer py-2 px-2 text-foreground hover:text-primary transition-colors rounded-md">
                <span className="font-medium">Categories</span>
              </div>
              <div className="pl-4 mt-2 space-y-2">
                {carCategories.map((category) => (
                  <Link 
                    key={category.id}
                    to={`/cars?category=${category.id}`}
                    className="block py-1.5 px-2 text-foreground hover:bg-accent hover:text-primary rounded-md transition-colors"
                    onClick={toggleMenu}
                  >
                    {category.name}
                  </Link>
                ))}
                <Link 
                  to="/cars"
                  className="block py-1.5 px-2 font-medium text-primary hover:bg-accent rounded-md transition-colors"
                  onClick={toggleMenu}
                >
                  View All Cars
                </Link>
              </div>
            </div>
            
            <Link to="/how-it-works" className="text-foreground hover:text-primary transition-colors px-2 py-1.5 rounded-md" onClick={toggleMenu}>How It Works</Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors px-2 py-1.5 rounded-md" onClick={toggleMenu}>Contact</Link>
            
            <div className="pt-2 border-t border-border mt-2">
              {isAuthenticated ? (
                <>
                  <Link to="/profile" onClick={toggleMenu} className="block w-full py-1.5 px-2 text-foreground hover:bg-accent hover:text-primary rounded-md transition-colors">
                    My Profile
                  </Link>
                  <Button 
                    variant="ghost"
                    className="w-full justify-start mt-2 text-destructive hover:text-destructive hover:bg-destructive/10"
                    onClick={() => {
                      logout();
                      toggleMenu();
                    }}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <div className="flex flex-col space-y-2">
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
