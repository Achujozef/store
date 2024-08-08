// UserProfile.js

import React from 'react';

const UserProfile = ({ image, name }) => (
  <div className="flex items-center space-x-2">
    {image ? (
      <img src={image} alt={name} className="w-10 h-10 rounded-full" />
    ) : (
      <i className="fas fa-user-circle text-4xl text-gray-500"></i>
    )}
  </div>
);

export default UserProfile;
