import React from 'react';

const PlantCard = ({ plant }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src={plant.image_url} alt={plant.common_name} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-lg font-bold">{plant.common_name}</h2>
        <p className="text-gray-600">{plant.scientific_name}</p>
        <p className="text-green-600 font-bold">${plant.price}</p>
      </div>
    </div>
  );
};

export default PlantCard;