// UserProfile.js

import React from 'react';

const UserProfile = ({ image, name }) => (
  <div className="flex items-center space-x-2">
    {image ? (
      <img src={image} alt={name} className="w-7 h-7 rounded-full" />
    ) : (
      <i className="fas fa-user-circle text-2xl text-gray-500"></i>
    )}
  </div>
);

export default UserProfile;
