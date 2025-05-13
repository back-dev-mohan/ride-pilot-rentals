
import React, { useState } from 'react';
import { Menu, X, User, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { useAuth } from '../context/AuthContext';
import ThemeToggle from './ThemeToggle';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "./ui/navigation-menu";

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
          <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
          
          {/* Categories Dropdown */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-2 p-4">
                    {carCategories.map((category) => (
                      <li key={category.id}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={`/cars?category=${category.id}`}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            {category.name}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Link to="/how-it-works" className="text-foreground hover:text-primary transition-colors">How It Works</Link>
          <Link to="/contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">
                Hi, {user?.name?.split(' ')[0]}
              </span>
              <Link to="/profile">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  My Profile
                </Button>
              </Link>
            </div>
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
            <Link to="/" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>Home</Link>
            
            {/* Mobile Categories Dropdown */}
            <div className="relative">
              <div className="flex items-center justify-between cursor-pointer py-2 text-foreground hover:text-primary transition-colors">
                <span>Categories</span>
              </div>
              <div className="pl-4 mt-2 space-y-2">
                {carCategories.map((category) => (
                  <Link 
                    key={category.id}
                    to={`/cars?category=${category.id}`}
                    className="block py-1 text-foreground hover:text-primary transition-colors"
                    onClick={toggleMenu}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link to="/how-it-works" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>How It Works</Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>Contact</Link>
            <div className="flex flex-col space-y-2 pt-2">
              {isAuthenticated ? (
                <>
                  <Link to="/profile" onClick={toggleMenu}>
                    <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                      <User className="h-4 w-4" />
                      My Profile
                    </Button>
                  </Link>
                  <Button 
                    className="w-full"
                    onClick={() => {
                      logout();
                      toggleMenu();
                    }}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={toggleMenu}>
                    <Button variant="outline" className="w-full">Login</Button>
                  </Link>
                  <Link to="/signup" onClick={toggleMenu}>
                    <Button className="w-full">Sign Up</Button>
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
