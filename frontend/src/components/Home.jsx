import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PlantCard from '../components/PlantCard';
import greenImage from '../assets/greenImage.jpg';



export default function Home() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    // Fetch plants from the Trefle API
    const fetchPlants = async () => {
      try {
        const response = await fetch(
          'https://trefle.io/api/v1/plants?token=YOUR_TREFLE_API_TOKEN'
        );
        const data = await response.json();
        // Add a random price to each plant
        const plantsWithPrices = data.data.map(plant => ({
          ...plant,
          price: Math.floor(Math.random() * 50) + 10
        }));
        setPlants(plantsWithPrices);
      } catch (error) {
        console.error('Error fetching plants:', error);
      }
    };

    fetchPlants();
  }, []);

  return (
    <div
      className="flex flex-col min-h-screen">
      <header className="bg-green-600 text-white p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-pink-300"> Welcome to Verdant Elegance </h1>
        </div>

  
 
 <p></p>

      </header>
      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {plants.map(plant => (
            <Link to={`/plant/${plant.id}`} key={plant.id}>
              <PlantCard plant={plant} />
            </Link>
          ))}
        </div>
      </main>
      <img src={greenImage} alt="" style={{width: '100%'}} />
    
    </div>
  );
}