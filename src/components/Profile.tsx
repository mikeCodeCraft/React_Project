// src/components/Profile.jsx
import React, { useEffect, useState } from 'react';
import api from '../api/api';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get('/accounts/users/'); // Adjust if single user endpoint
        setUser(response.data); // Adjust based on response structure
      } catch (err) {
        setError('Failed to fetch user data.');
      }
    };
    fetchUser();
  }, []);

  return (
    <section id="profile" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">User Profile</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        {user ? (
          <div>
            <h3 className="text-2xl font-semibold">Welcome, {user.username || user.email}</h3>
            <p className="text-gray-600">Email: {user.email}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
};

export default Profile;