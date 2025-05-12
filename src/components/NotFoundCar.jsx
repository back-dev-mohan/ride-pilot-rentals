
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const NotFoundCar = ({ searchQuery }) => {
  return (
    <div className="text-center py-16">
      <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 text-gray-400">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 className="text-xl font-bold mb-2">No Cars Found</h3>
      {searchQuery && (
        <p className="text-gray-600 mb-6">
          We couldn't find any cars matching "{searchQuery}".
        </p>
      )}
      <p className="text-gray-600 mb-6">
        Please try adjusting your search criteria or browse our categories.
      </p>
      <div className="flex justify-center gap-4">
        <Link to="/cars">
          <Button variant="outline">Browse All Cars</Button>
        </Link>
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundCar;
