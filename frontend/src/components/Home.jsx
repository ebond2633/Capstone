import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Search, ShoppingCart } from 'lucide-react';
import PlantCard from '../components/PlantCard';
import Carousel from '../components/Carousel';

function Home() {
  const [plants, setPlants] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Simulating API call to fetch plants
    const fetchPlants = async () => {
      try {
        // Replace this with your actual API call
        const response = await fetch('/api/plants');
        if (!response.ok) throw new Error('Failed to fetch plants');
        const data = await response.json();
        setPlants(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPlants();
  }, []);

  const filteredPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-green-50">

      <main className="container mx-auto p-8 flex-grow">
        <h2 className="text-3xl font-bold text-green-800 mb-6">Our Collection</h2>

        <p>Hello</p>
        {/* {error && (
          <p className="text-red-500 bg-red-100 p-4 rounded-md mb-6">Error fetching plants: {error}</p>
        )} */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredPlants.map(plant => (
            <Link to={`/plant/${plant.id}`} key={plant.id} className="transform hover:scale-105 transition-transform duration-300">
              <PlantCard plant={plant} />
            </Link>
          ))}
        </div>
        {filteredPlants.length === 0 && !error && (
          <p className="text-center text-gray-600 mt-8">No plants found. Try a different search term.</p>
        )}
      </main>

      <div className="bg-green-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">Featured Plants</h2>
          <Carousel />
        </div>
      </div>

      {/* <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Verdant Elegance. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <Link to="/about" className="hover:underline">About Us</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
          </div>
        </div>
      </footer> */}
    </div>
  );
}

export default Home;