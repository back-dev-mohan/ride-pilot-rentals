
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Car, Calendar, DollarSign, User, Mail, Phone, Edit, LogOut } from 'lucide-react';

const Profile = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, loading, logout, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  // Redirect if not authenticated
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate('/login');
    }
  }, [loading, isAuthenticated, navigate]);
  
  // Update local state when user data changes
  useEffect(() => {
    if (user) {
      setUserData({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        address: user.address || '',
      });
    }
  }, [user]);

  // Mock bookings data
  const bookings = [
    {
      id: 'B12345',
      carName: 'Toyota Camry',
      startDate: '2023-06-15',
      endDate: '2023-06-18',
      status: 'Completed',
      totalPrice: 135,
      carImage: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      id: 'B12346',
      carName: 'Honda CR-V',
      startDate: '2023-07-10',
      endDate: '2023-07-15',
      status: 'Upcoming',
      totalPrice: 325,
      carImage: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(userData);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4">Loading...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto py-8 px-4">
          <h1 className="text-3xl font-bold mb-8">My Profile</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* User Profile Card */}
            <div className="md:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="h-12 w-12 text-gray-500" />
                  </div>
                  <h2 className="text-xl font-bold">{userData.name}</h2>
                  <p className="text-gray-600">Member since 2022</p>
                </div>
                
                {isEditing ? (
                  <form onSubmit={handleProfileUpdate}>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={userData.name}
                          onChange={handleInputChange}
                          className="w-full p-2 border rounded-md"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={userData.email}
                          onChange={handleInputChange}
                          className="w-full p-2 border rounded-md"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone
                        </label>
                        <input
                          type="text"
                          name="phone"
                          value={userData.phone}
                          onChange={handleInputChange}
                          className="w-full p-2 border rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Address
                        </label>
                        <textarea
                          name="address"
                          value={userData.address}
                          onChange={handleInputChange}
                          className="w-full p-2 border rounded-md"
                          rows="3"
                        ></textarea>
                      </div>
                      <div className="flex gap-2">
                        <Button type="submit" className="flex-1">Save</Button>
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={() => setIsEditing(false)}
                          className="flex-1"
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </form>
                ) : (
                  <>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-gray-500 mr-3" />
                        <span>{userData.email}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-gray-500 mr-3" />
                        <span>{userData.phone || 'Not provided'}</span>
                      </div>
                      <div className="flex">
                        <div className="flex-shrink-0 mt-1">
                          <svg className="h-5 w-5 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <span>{userData.address || 'Not provided'}</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex gap-4">
                      <Button 
                        variant="outline" 
                        className="flex-1 flex items-center justify-center gap-2"
                        onClick={() => setIsEditing(true)}
                      >
                        <Edit className="h-4 w-4" />
                        Edit Profile
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex-1 flex items-center justify-center gap-2 text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
                        onClick={handleLogout}
                      >
                        <LogOut className="h-4 w-4" />
                        Logout
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </div>
            
            {/* Booking History */}
            <div className="md:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-6">My Bookings</h2>
                
                {bookings.length > 0 ? (
                  <div className="space-y-6">
                    {bookings.map(booking => (
                      <div key={booking.id} className="border rounded-lg overflow-hidden">
                        <div className="p-4 border-b bg-gray-50 flex justify-between items-center">
                          <div className="flex items-center">
                            <span className="font-medium">Booking #{booking.id}</span>
                            <span className={`ml-3 px-2 py-1 rounded-full text-xs ${
                              booking.status === 'Completed' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-blue-100 text-blue-800'
                            }`}>
                              {booking.status}
                            </span>
                          </div>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                        
                        <div className="p-4 flex flex-col md:flex-row">
                          <div className="md:w-1/3 mb-4 md:mb-0">
                            <div className="aspect-[4/3] rounded-md overflow-hidden bg-gray-100">
                              <img 
                                src={booking.carImage}
                                alt={booking.carName} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          
                          <div className="md:w-2/3 md:pl-6 space-y-3">
                            <div className="flex items-center">
                              <Car className="h-5 w-5 text-gray-500 mr-2" />
                              <span className="font-medium">{booking.carName}</span>
                            </div>
                            <div className="flex items-center">
                              <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                              <span>{booking.startDate} to {booking.endDate}</span>
                            </div>
                            <div className="flex items-center">
                              <DollarSign className="h-5 w-5 text-gray-500 mr-2" />
                              <span className="font-medium">${booking.totalPrice} total</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">No bookings yet</h3>
                    <p className="text-gray-500 mb-4">
                      You haven't made any car reservations yet.
                    </p>
                    <Button asChild>
                      <a href="/cars">Browse Cars</a>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
