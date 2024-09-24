import React, { useState } from 'react';

export default function Cart() {
  // Mock cart items (replace with actual cart state management)
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Monstera Deliciosa', price: 29.99, quantity: 2 },
    { id: 2, name: 'Snake Plant', price: 19.99, quantity: 1 },
    { id: 3, name: 'Fiddle Leaf Fig', price: 39.99, quantity: 1 },
    { id: 4, name: 'ZZ Plant', price: 24.99, quantity: 3 },
    { id: 5, name: 'Pothos', price: 14.99, quantity: 2 },
    { id: 6, name: 'Peace Lily', price: 19.99, quantity: 1 },
    { id: 7, name: 'Spider Plant', price: 12.99, quantity: 2 },
    { id: 8, name: 'Aloe Vera', price: 9.99, quantity: 1 },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cartItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(cartItems.length / itemsPerPage);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200">
            {currentItems.map(item => (
              <li key={item.id} className="py-4 flex justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="w-16 text-center border rounded"
                  />
                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-4 text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 disabled:opacity-50"
            >
              Previous
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Total: ${total.toFixed(2)}</h2>
      </div>
    </div>
  );
}