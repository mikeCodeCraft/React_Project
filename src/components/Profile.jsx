// src/components/Profile.jsx
import React, { useState, useEffect } from 'react';
import useCurrentUser from '../hooks/useCurrentUser';

const Profile = () => {
  const { user, loading, error } = useCurrentUser();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (user) {
      setProfile({
        username: user.username,
        email: user.email,
      });
    }
  }, [user]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!profile) return <div>No profile data</div>;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-6">Profile</h2>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <p><strong>Username:</strong> {profile.username}</p>
          <p><strong>Email:</strong> {profile.email}</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;