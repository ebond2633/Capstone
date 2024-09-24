import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar';


export default function Header() {
  return (
    <header className="bg-pink-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
      <NavBar />
      </div>
    </header>
  )
}