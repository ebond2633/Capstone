import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Leaf, Search, ShoppingCart, Menu } from 'lucide-react'

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchTerm);
  };

  return (
    <header className="bg-gradient-to-r from-green-600 to-green-800 text-white p-4 sticky top-0 z-10 shadow-md">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
        
        </Link>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
        <div className={`w-full md:w-auto mt-4 md:mt-0 ${isMenuOpen ? 'block' : 'hidden md:flex'} items-center space-y-4 md:space-y-0 md:space-x-4`}>
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="Search plants..."
              className="w-full md:w-auto pl-10 pr-4 py-2 rounded-full bg-green-700 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-200"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
          </form>
          <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            {/* <Link to="/products" className="hover:text-green-200 transition-colors">Products</Link>
            <Link to="/about" className="hover:text-green-200 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-green-200 transition-colors">Contact</Link> */}
          </nav>
          <Link to="/cart" className="inline-flex items-center space-x-2 text-white hover:text-green-200 transition-colors">
            <ShoppingCart size={24} />
            <span className="sr-only md:not-sr-only">Cart</span>
          </Link>
        </div>
      </div>
    </header>
  )
}