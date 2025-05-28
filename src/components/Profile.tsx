import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCurrentUser from '../hooks/useCurrentUser';

const Profile = () => {
  const { user, loading, error } = useCurrentUser();
  const navigate = useNavigate();

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  const handleEditClick = () => {
    navigate('/profile/update'); // Adjust the route as needed
  };

  return (
    <section id="profile" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">User Profile</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
        </div>
        <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md text-center">
          <img
            src={user?.profile?.image || '/default-profile.png'}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="text-2xl font-semibold mb-2">{user.username}</h3>
          <p className="text-gray-600 mb-4">Email: {user.email}</p>
          {/* Edit Profile Button */}
          <button
            onClick={handleEditClick}
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-md transition"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
