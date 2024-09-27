import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PlantCard from '../components/PlantCard';
import greenImage from '../assets/greenImage.jpg';

function Home() {
  const [plants, setPlants] = useState([]);
  const [error, setError] = useState(null);

  

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-green-600 text-white p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-pink-600"> Welcome to Verdant Elegance </h1>
        </div>
      </header>
      <main className="container mx-auto p-4">
        {error && <p className="text-red-500">Error fetching plants: {error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {plants.map(plant => (
            <Link to={`/plant/${plant.id}`} key={plant.id}>
              <PlantCard plant={plant} />
            </Link>
          ))}
        </div>
      </main>
      <img src={greenImage} alt="" style={{ width: '100%' }} />
    </div>
  );
}
export default Home;