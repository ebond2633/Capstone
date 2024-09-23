import React from 'react'

export default function PlantCard({ plant }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={plant.image_url} alt={plant.common_name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{plant.common_name}</h3>
        <p className="text-gray-600 mb-2">{plant.scientific_name}</p>
        <p className="text-green-600 font-bold">${plant.price.toFixed(2)}</p>
        <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  )
}