
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, DollarSign } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Button } from './ui/button';

const CarCard = ({ car }) => {
  const { id, name, type, price, year, seats } = car;

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="aspect-[16/9] relative overflow-hidden bg-muted">
        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
          <p className="text-sm">{name} Image Placeholder</p>
        </div>
        <div className="absolute top-2 right-2 bg-white/90 dark:bg-background/90 text-sm font-bold py-1 px-2 rounded">
          {type}
        </div>
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="flex items-center text-lg font-bold text-primary">
            <DollarSign className="h-4 w-4" />
            {price}/day
          </p>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="flex justify-between text-sm text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="mr-1 h-4 w-4" />
            <span>{year}</span>
          </div>
          <div className="flex items-center">
            <Users className="mr-1 h-4 w-4" />
            <span>{seats} seats</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link to={`/cars/${id}`} className="w-full">
          <Button variant="default" className="w-full">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
