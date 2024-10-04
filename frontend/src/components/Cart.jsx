import React, { useContext, useState, useEffect } from 'react';
import { StoreProvider } from "../store/ContextProvider";
import { Trash2, Plus, Minus } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { state, dispatch } = useContext(StoreProvider);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const navigate = useNavigate();

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity >= 1) {
      dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity: newQuantity } });
    }
  };

  const removeItem = (id) => {
    console.log(id)
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const total = state.cart.reduce((sum, item) => sum + item.price, 0);


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = state.cart.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(state.cart.length / itemsPerPage);

  useEffect(() => {
    if (currentItems.length === 0 && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }, [currentItems.length, currentPage]);

  const checkout = () => {
    // This is where the  cart  sends data to the server
    navigate("/checkout");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mt-8 mb-6">Your Cart</h2>
      {state.cart.length === 0 ? (
        <div className="text-center text-gray-600 py-8">
          <p className="text-xl mb-4">Your cart is empty.</p>
          <a href="/products" className="text-blue-500 hover:text-blue-700 underline">
            Continue Shopping
          </a>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentItems.map((item) => (
              <div key={item.id} className="bg-White border border-gray-200 rounded-lg shadow-md overflow-hidden">
                <img src={item.img_url || "/placeholder.svg?height=200&width=200"} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <p className="text-lg font-bold text-green-600 mb-3">${item.price.toFixed(2)}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border rounded">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 bg-gray-100 hover:bg-gray-200 transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10) || 1)}
                        className="w-12 text-center border-x"
                      />
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 bg-gray-100 hover:bg-gray-200 transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>
              <span className="text-gray-600">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            </div>
          )}
          <div className="mt-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Total: ${total.toFixed(2)}</h2>
            <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-lg font-semibold"
            onClick={checkout}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}