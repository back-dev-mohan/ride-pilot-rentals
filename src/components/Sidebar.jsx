
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, Car, CarFront } from "lucide-react";
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

  const toggleCategory = () => {
    setCategoryExpanded(!categoryExpanded);
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <SidebarComponent collapsible="icon" variant="sidebar">
          <SidebarContent>
            <SidebarGroup 
              open={categoryExpanded} 
              onOpenChange={setCategoryExpanded}
            >
              <SidebarGroupLabel className="flex items-center justify-between cursor-pointer" onClick={toggleCategory}>
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
              <SidebarGroupContent>
                <SidebarMenu>
                  {carCategories.map((category) => (
                    <SidebarMenuItem key={category.id}>
                      <SidebarMenuButton asChild>
                        <Link
                          to={`/cars?category=${category.id}`}
                          className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-accent transition-colors"
                        >
                          <category.icon className="h-4 w-4" />
                          <span>{category.name}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </SidebarComponent>
        <div className="flex-1">{children}</div>
      </div>
    </SidebarProvider>
  );
};

export default Sidebar;
