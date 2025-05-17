
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, Car, CarFront, Home } from "lucide-react";
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

// Sample car categories
const carCategories = [
  { name: "Sedan", id: "sedan", icon: Car },
  { name: "SUV", id: "suv", icon: CarFront },
  { name: "Luxury", id: "luxury", icon: Car },
  { name: "Hatchback", id: "hatchback", icon: Car },
  { name: "Truck", id: "truck", icon: CarFront },
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
        <SidebarComponent collapsible="icon" variant="sidebar" className="border-r border-border transition-all duration-300">
          <SidebarContent className="p-3">
            <div className="mb-6 px-3 py-2">
              <h2 className="text-lg font-semibold text-foreground">RidePilot</h2>
              <p className="text-xs text-muted-foreground">Car Rental Service</p>
            </div>
            
            <SidebarGroup 
              open={categoryExpanded} 
              onOpenChange={setCategoryExpanded}
            >
              <SidebarGroupLabel 
                className="flex items-center justify-between cursor-pointer px-3 py-2 hover:bg-accent rounded-md transition-colors" 
                onClick={toggleCategory}
              >
                <div className="flex items-center gap-2">
                  <CarFront className="h-4 w-4" />
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
                          className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-accent transition-colors relative group"
                          onMouseEnter={() => handleCategoryHover(category.id)}
                          onMouseLeave={handleCategoryLeave}
                        >
                          <category.icon className="h-4 w-4" />
                          <span>{category.name}</span>
                          
                          {/* Hover dropdown with smooth animation */}
                          {activeCategory === category.id && (
                            <div className="absolute left-full top-0 ml-2 bg-background shadow-lg rounded-md p-3 w-48 z-50 border border-border animate-fade-in">
                              <h4 className="font-medium text-sm mb-2">{category.name} Models</h4>
                              <div className="space-y-1">
                                <p className="text-sm py-1.5 px-2 hover:bg-accent rounded-md cursor-pointer transition-colors">
                                  Popular {category.name}s
                                </p>
                                <p className="text-sm py-1.5 px-2 hover:bg-accent rounded-md cursor-pointer transition-colors">
                                  Budget {category.name}s
                                </p>
                                <p className="text-sm py-1.5 px-2 hover:bg-accent rounded-md cursor-pointer transition-colors">
                                  Premium {category.name}s
                                </p>
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
                        className="flex items-center gap-2 py-2 px-3 mt-2 rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        <Car className="h-4 w-4" />
                        <span>All Cars</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            
            {/* Home link */}
            <div className="px-3 py-2">
              <Link to="/" className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-accent transition-colors">
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
            </div>
            
            <div className="mt-6 px-3">
              <h3 className="text-xs uppercase text-muted-foreground font-medium tracking-wider mb-2">Quick Links</h3>
              <div className="space-y-1">
                <Link to="/how-it-works" className="block py-2 px-3 hover:bg-accent rounded-md text-sm transition-colors">
                  How It Works
                </Link>
                <Link to="/contact" className="block py-2 px-3 hover:bg-accent rounded-md text-sm transition-colors">
                  Contact Us
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
