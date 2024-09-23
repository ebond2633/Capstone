import React, { useState, useEffect } from 'react'
import PlantCard from '../components/PlantCard'

export default function Home() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    // Fetch plants from the Trefle API
    const fetchPlants = async () => {
      try {
        const response = await fetch(
          'https://trefle.io/api/v1/plants?token=YOUR_TREFLE_API_TOKEN'
        )
        const data = await response.json()
        // Add a random price to each plant
        const plantsWithPrices = data.data.map(plant => ({
          ...plant,
          price: Math.floor(Math.random() * 50) + 10
        }))
        setPlants(plantsWithPrices)
      } catch (error) {
        console.error('Error fetching plants:', error)
      }
    }

    fetchPlants()
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Welcome to Plant Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {plants.map(plant => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  )
}