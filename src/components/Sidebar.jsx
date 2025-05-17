
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, Car, Home } from "lucide-react";
import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from "./ui/sidebar";

// Car categories with consistent structure
const carCategories = [
  { 
    name: "Sedan", 
    id: "sedan", 
    icon: Car,
    models: ["Economy Sedan", "Family Sedan", "Luxury Sedan"] 
  },
  { 
    name: "SUV", 
    id: "suv", 
    icon: Car,
    models: ["Compact SUV", "Mid-size SUV", "Full-size SUV"] 
  },
  { 
    name: "Luxury", 
    id: "luxury", 
    icon: Car,
    models: ["Sports Car", "Executive Sedan", "Luxury SUV"] 
  },
  { 
    name: "Hatchback", 
    id: "hatchback", 
    icon: Car,
    models: ["Economy Hatchback", "Sport Hatchback", "Electric Hatchback"] 
  },
  { 
    name: "Truck", 
    id: "truck", 
    icon: Car,
    models: ["Light Duty Truck", "Heavy Duty Truck", "Work Truck"] 
  },
];

const Sidebar = ({ children }) => {
  const [categoryExpanded, setCategoryExpanded] = useState(true);
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = () => {
    setCategoryExpanded(!categoryExpanded);
  };

  const handleCategoryHover = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const handleCategoryLeave = () => {
    setActiveCategory(null);
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <SidebarComponent 
          collapsible="icon" 
          variant="sidebar" 
          className="border-r border-border transition-all duration-300 sidebar-transition"
        >
          <SidebarContent className="p-4">
            <div className="mb-6 px-3 py-3 bg-accent/50 rounded-lg">
              <h2 className="text-lg font-semibold text-foreground">RidePilot</h2>
              <p className="text-xs text-muted-foreground">Car Rental Service</p>
            </div>
            
            {/* Home link at the top */}
            <div className="px-3 py-2 mb-4">
              <Link to="/" className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-accent transition-colors hover-transition">
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
            </div>
            
            <SidebarGroup 
              open={categoryExpanded} 
              onOpenChange={setCategoryExpanded}
            >
              <SidebarGroupLabel 
                className="flex items-center justify-between cursor-pointer px-3 py-2 hover:bg-accent rounded-md transition-colors hover-transition" 
                onClick={toggleCategory}
              >
                <div className="flex items-center gap-2">
                  <Car className="h-4 w-4" />
                  <span>Categories</span>
                </div>
                {categoryExpanded ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </SidebarGroupLabel>
              <SidebarGroupContent className="pl-3 pr-1">
                <SidebarMenu>
                  {carCategories.map((category) => (
                    <SidebarMenuItem key={category.id}>
                      <SidebarMenuButton asChild>
                        <Link
                          to={`/cars?category=${category.id}`}
                          className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-accent transition-colors hover-transition relative group"
                          onMouseEnter={() => handleCategoryHover(category.id)}
                          onMouseLeave={handleCategoryLeave}
                        >
                          <category.icon className="h-4 w-4" />
                          <span>{category.name}</span>
                          
                          {/* Enhanced hover dropdown with smooth animation */}
                          {activeCategory === category.id && (
                            <div className="absolute left-full top-0 ml-2 bg-background shadow-lg rounded-md p-4 w-56 z-50 border border-border animate-fade-in">
                              <h4 className="font-medium text-sm mb-3 border-b pb-2">{category.name} Models</h4>
                              <div className="space-y-2">
                                {category.models.map((model, index) => (
                                  <Link 
                                    key={index} 
                                    to={`/cars?category=${category.id}&model=${model.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="block text-sm py-1.5 px-2 hover:bg-accent rounded-md cursor-pointer transition-colors hover-transition"
                                  >
                                    {model}
                                  </Link>
                                ))}
                                <div className="pt-2 mt-2 border-t border-border">
                                  <Link 
                                    to={`/cars?category=${category.id}`}
                                    className="block text-sm font-medium py-1.5 px-2 text-primary hover:bg-accent/50 rounded-md"
                                  >
                                    All {category.name} Models
                                  </Link>
                                </div>
                              </div>
                            </div>
                          )}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link
                        to="/cars"
                        className="flex items-center gap-2 py-2 px-3 mt-2 rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors hover-transition"
                      >
                        <Car className="h-4 w-4" />
                        <span>All Cars</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            
            <div className="mt-6 px-3">
              <h3 className="text-xs uppercase text-muted-foreground font-medium tracking-wider mb-2">Quick Links</h3>
              <div className="space-y-1">
                <Link to="/how-it-works" className="block py-2 px-3 hover:bg-accent rounded-md text-sm transition-colors hover-transition">
                  How It Works
                </Link>
                <Link to="/contact" className="block py-2 px-3 hover:bg-accent rounded-md text-sm transition-colors hover-transition">
                  Contact Us
                </Link>
                <Link to="/about" className="block py-2 px-3 hover:bg-accent rounded-md text-sm transition-colors hover-transition">
                  About Us
                </Link>
              </div>
            </div>
          </SidebarContent>
        </SidebarComponent>
        <div className="flex-1">{children}</div>
      </div>
    </SidebarProvider>
  );
};

export default Sidebar;
