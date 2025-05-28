// src/components/UpdateProfile.tsx
import React, { useState, useEffect } from 'react';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
  const [userData, setUserData] = useState({
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    old_password: '',
    image: null as File | null,
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch current user data
    api.get('/accounts/me/')
      .then(res => {
        const { email, first_name, last_name, profile } = res.data;
        setUserData(prev => ({ 
          ...prev, 
          email, 
          first_name, 
          last_name 
        }));
        if (profile?.image) {
          setImagePreview(profile.image);
        }
      })
      .catch(() => {
        setError('Failed to load user data');
      });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setUserData({ ...userData, image: file });

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const formData = new FormData();
      formData.append('email', userData.email);
      formData.append('first_name', userData.first_name);
      formData.append('last_name', userData.last_name);

      if (userData.password) {
        formData.append('password', userData.password);
        formData.append('old_password', userData.old_password);
      }

      if (userData.image) {
        formData.append('image', userData.image);
      }

      await api.put('/accounts/me/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setSuccess('Profile updated successfully!');
      setUserData(prev => ({ ...prev, password: '', old_password: '' }));
    } catch (err: any) {
      setError(err.response?.data?.info || 'Update failed');
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-md mx-auto bg-white p-8 shadow-md rounded-xl">
        <h2 className="text-2xl font-bold mb-6">Update Profile</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}

        {imagePreview && (
          <div className="mb-6 flex justify-center">
            <img
              src={imagePreview}
              alt="Profile Preview"
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Profile Image</label>
            <input type="file" name="image" accept="image/*" onChange={handleFileChange} />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">First Name</label>
            <input
              type="text"
              name="first_name"
              value={userData.first_name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Last Name</label>
            <input
              type="text"
              name="last_name"
              value={userData.last_name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">New Password (optional)</label>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          {userData.password && (
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Old Password</label>
              <input
                type="password"
                name="old_password"
                value={userData.old_password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
          >
            Update Profile
          </button>
        </form>
      </div>
    </section>
  );
};

export default UpdateProfile;
