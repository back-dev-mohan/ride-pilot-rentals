
/**
 * API Service Module
 * 
 * This module centralizes API calls and provides a consistent interface for
 * making requests to the backend. It handles error parsing, authentication,
 * and request formatting.
 */

import { toast } from 'sonner';

// Base API URL - would be set as environment variable in production
const API_BASE_URL = 'https://api.example.com'; // Replace with actual API URL

// Request headers
const getHeaders = () => {
  const headers = {
    'Content-Type': 'application/json',
  };

  // Add auth token if available
  const token = localStorage.getItem('token');
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return headers;
};

// Error handler
const handleError = (error) => {
  console.error('API Error:', error);
  
  // Extract error message
  let errorMessage = 'An unexpected error occurred. Please try again.';
  
  if (error.response) {
    // Server responded with an error status
    errorMessage = error.response.data?.message || 
                  `Server error: ${error.response.status}`;
                  
    // Handle authentication errors
    if (error.response.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
  } else if (error.request) {
    // Request made but no response
    errorMessage = 'No response from server. Please check your connection.';
  }
  
  toast.error(errorMessage);
  throw error;
};

// Generic request method
const request = async (endpoint, options = {}) => {
  try {
    const url = `${API_BASE_URL}${endpoint}`;
    const response = await fetch(url, {
      headers: getHeaders(),
      ...options,
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw {
        response: {
          status: response.status,
          data: errorData,
        },
      };
    }
    
    // Check if response is JSON
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    }
    
    return await response.text();
  } catch (error) {
    return handleError(error);
  }
};

// API methods
const api = {
  // Auth endpoints
  auth: {
    login: (credentials) => 
      request('/auth/login', {
        method: 'POST',
        body: JSON.stringify(credentials),
      }),
      
    register: (userData) => 
      request('/auth/register', {
        method: 'POST',
        body: JSON.stringify(userData),
      }),
      
    logout: () => 
      request('/auth/logout', {
        method: 'POST',
      }),
  },
  
  // User endpoints
  user: {
    getProfile: () => request('/user/profile'),
    
    updateProfile: (userData) => 
      request('/user/profile', {
        method: 'PUT',
        body: JSON.stringify(userData),
      }),
      
    getBookings: () => request('/user/bookings'),
  },
  
  // Cars endpoints
  cars: {
    getAll: (params) => {
      const queryParams = new URLSearchParams(params).toString();
      return request(`/cars?${queryParams}`);
    },
    
    getById: (id) => request(`/cars/${id}`),
    
    getCategories: () => request('/cars/categories'),
  },
  
  // Bookings endpoints
  bookings: {
    create: (bookingData) => 
      request('/bookings', {
        method: 'POST',
        body: JSON.stringify(bookingData),
      }),
      
    getById: (id) => request(`/bookings/${id}`),
    
    cancel: (id) => 
      request(`/bookings/${id}/cancel`, {
        method: 'POST',
      }),
  },
};

export default api;
