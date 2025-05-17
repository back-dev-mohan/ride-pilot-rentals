
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, DollarSign, CarFront } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const CarCard = ({ car }) => {
  const { id, name, type, price, year, seats } = car;

  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <CarFront className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-bold">{name}</h3>
          </div>
          <Badge variant="secondary">{type}</Badge>
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
        <div className="mt-4 flex items-center justify-center text-lg font-bold text-primary">
          <DollarSign className="h-4 w-4" />
          {price}/day
        </div>
      </CardContent>
      <CardFooter>
        <Link to={`/cars/${id}`} className="w-full">
          <Button variant="default" className="w-full" size="sm">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
