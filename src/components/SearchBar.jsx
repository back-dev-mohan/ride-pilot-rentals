
import React, { useState } from 'react';
import { Search, Calendar, MapPin } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto bg-card rounded-lg shadow-sm border border-border p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            <Search className="h-4 w-4" />
          </div>
          <Input
            type="text"
            placeholder="Car model, type..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
          </div>
          <Input
            type="text"
            placeholder="Pick-up date"
            className="pl-10"
          />
        </div>
        
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
          </div>
          <Input
            type="text"
            placeholder="Location"
            className="pl-10"
          />
        </div>
      </div>
      
      <div className="mt-4 flex justify-center">
        <Button 
          type="submit" 
          className="w-full md:w-auto px-8"
        >
          Search Cars
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;
