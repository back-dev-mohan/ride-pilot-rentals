
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useToast } from '../hooks/use-toast';
// import api from '../services/api'; // Uncomment when backend is connected

// Create auth context
const AuthContext = createContext();

// Auth provider component
export const AuthProvider = ({ children }) => {
  const { toast } = useToast();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on initial load
  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        // Get token from localStorage
        const token = localStorage.getItem('token');
        
        if (token) {
          // In a real app, we would verify the token with the backend
          // const userData = await api.user.getProfile();
          
          // For demo purposes, we'll use mock data
          const userData = JSON.parse(localStorage.getItem('user'));
          if (userData) {
            setUser(userData);
          }
        }
      } catch (error) {
        console.error('Authentication error:', error);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      } finally {
        setLoading(false);
      }
    };
    
    checkLoggedIn();
  }, []);

  // Login function
  const login = async (credentials) => {
    try {
      setLoading(true);
      
      // In a real app, this would be an API call
      // const response = await api.auth.login(credentials);
      
      // For demo purposes, we'll simulate a successful login
      const mockResponse = {
        token: 'mock-jwt-token',
        user: {
          id: '1',
          name: 'John Doe',
          email: credentials.email,
          role: 'user',
        },
      };
      
      // Save token and user data to localStorage
      localStorage.setItem('token', mockResponse.token);
      localStorage.setItem('user', JSON.stringify(mockResponse.user));
      
      // Update state
      setUser(mockResponse.user);
      
      toast({
        title: "Login Successful",
        description: `Welcome back, ${mockResponse.user.name}!`,
      });
      
      return mockResponse;
    } catch (error) {
      toast({
        title: "Login Failed",
        description: error.message || "Invalid credentials. Please try again.",
        variant: "destructive",
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Register function
  const register = async (userData) => {
    try {
      setLoading(true);
      
      // In a real app, this would be an API call
      // const response = await api.auth.register(userData);
      
      // For demo purposes, we'll simulate a successful registration
      const mockResponse = {
        message: 'Registration successful',
      };
      
      toast({
        title: "Registration Successful",
        description: "Your account has been created. You can now log in.",
      });
      
      return mockResponse;
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: error.message || "There was an error creating your account.",
        variant: "destructive",
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    // Remove token and user data from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    // Update state
    setUser(null);
    
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
  };

  // Update user profile
  const updateProfile = async (userData) => {
    try {
      setLoading(true);
      
      // In a real app, this would be an API call
      // const response = await api.user.updateProfile(userData);
      
      // For demo purposes, we'll simulate a successful update
      const updatedUser = { ...user, ...userData };
      
      // Update localStorage
      localStorage.setItem('user', JSON.stringify(updatedUser));
      
      // Update state
      setUser(updatedUser);
      
      toast({
        title: "Profile Updated",
        description: "Your profile has been updated successfully.",
      });
      
      return updatedUser;
    } catch (error) {
      toast({
        title: "Update Failed",
        description: error.message || "There was an error updating your profile.",
        variant: "destructive",
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Context values
  const value = {
    user,
    isAuthenticated: !!user,
    loading,
    login,
    register,
    logout,
    updateProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Export the context for use with useContext directly
export default AuthContext;
