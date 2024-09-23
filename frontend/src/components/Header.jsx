import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-pink-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* <Link to="/" className="text-2xl font-bold">Plant Shop</Link> */}
        {/* <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-green-200">Home</Link></li>
            <li><Link to="/login" className="hover:text-green-200">Login</Link></li>
            <li><Link to="/signup" className="hover:text-green-200">Sign Up</Link></li>
            <li><Link to="/cart" className="hover:text-green-200">Cart</Link></li>
          </ul>
        </nav> */}
      </div>
    </header>
  )
}