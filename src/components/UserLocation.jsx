import React from 'react';

const UserLocation = ({ location, address }) => (
  <div className="flex items-center justify-between w-full">
    <div className="flex items-center space-x-2">
      <i className="fas fa-map-marker-alt text-xl text-red-500"></i>
      <div>
        <div className="text-sm font-semibold">{location}</div>
        <div className="text-xs text-gray-500">
          {address} <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </div>
  </div>
);

export default UserLocation;
