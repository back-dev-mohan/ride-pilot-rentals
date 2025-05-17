
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, DollarSign } from 'lucide-react';
import { Button } from './ui/button';
import { AspectRatio } from './ui/aspect-ratio';

const CarListItem = ({ car }) => {
  const { id, name, type, price, year, seats } = car;

  return (
    <div className="group border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md dark:hover:shadow-primary/10 bg-background card-shadow">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1 relative">
          <AspectRatio ratio={4/3} className="bg-muted">
            <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-accent/20">
              <div className="text-center p-4">
                <p className="text-lg font-medium mb-1">{name}</p>
                <p className="text-xs text-muted-foreground">
                  Image placeholder
                  <br />
                  <span className="text-xs opacity-70">(Will be populated from API)</span>
                </p>
              </div>
            </div>
          </AspectRatio>
          <div className="absolute top-2 right-2 bg-background/90 dark:bg-background/80 text-sm font-bold py-1 px-2 rounded border border-border">
            {type}
          </div>
        </div>
        
        <div className="p-4 md:col-span-2 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold text-foreground">{name}</h3>
              <p className="flex items-center text-lg font-bold text-primary">
                <DollarSign className="h-4 w-4" />
                {price}/day
              </p>
            </div>
            
            <div className="flex gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                <span>{year}</span>
              </div>
              <div className="flex items-center">
                <Users className="mr-1 h-4 w-4" />
                <span>{seats} seats</span>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-4 text-sm">
              Experience the perfect blend of comfort and performance with the {name}. 
              Ideal for {type.toLowerCase() === 'luxury' ? 'special occasions' : 'everyday use'}.
            </p>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-sm font-medium text-muted-foreground">
                Available now
              </span>
            </div>
            <Link to={`/cars/${id}`}>
              <Button variant="default">View Details</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarListItem;
