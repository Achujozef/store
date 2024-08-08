// UserLocation.js

// src/components/UserLocation.js

import React from 'react';

const UserLocation = ({ location, address }) => (
  <div className="flex items-center space-x-2">
    <div>
      <i className="fas fa-map-marker-alt text-xl text-green-500"></i>
    </div>
    <div>
      <div className="text-lg font-semibold">{location}</div>
      <div className="text-sm text-gray-500">
        {address} <i className="fas fa-chevron-down"></i>
      </div>
    </div>
  </div>
);

export default UserLocation;

