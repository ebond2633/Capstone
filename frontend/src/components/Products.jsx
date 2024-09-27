import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { StoreProvider } from "../store/ContextProvider";

function Products() {
  const [products, setProducts] = useState([]);
  const { state, dispatch } = useContext(StoreProvider);
  const navigate = useNavigate();

  const handleItemClick = (id) => {
    navigate(`/products/${id}`);
  };

  const addToCart = (e, product) => {
    e.stopPropagation();
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  useEffect(() => {
    fetch('http://localhost:8080/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group cursor-pointer"
              onClick={() => handleItemClick(product.id)}
            >
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 mb-4">
                <img
                  alt={product.description}
                  src={product.img_url}
                  className=" w-full object-cover object-center group-hover:opacity-75 transition-opacity duration-300 h-40"
                />
              </div>
              <h3 className="text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
              <button
                onClick={(e) => addToCart(e, product)}
                className="mt-2 w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition-colors duration-300"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
 


    // <div>
    //   <h1 className="text-2xl font-bold text-blue-500 mb-4">Products</h1>
    //   <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
    //     {products.map(product => (
    //       <div key={product.id} style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
    //         <img src={product.img_url} alt={product.name} style={{ width: '100%', height: 'auto' }} />
    //         <h2>{product.name}</h2>
    //         <p>{product.description}</p>
    //         <p><strong>Price:</strong> ${product.price}</p>
    //         <button
    //         className="mt-4 bg-saffron text-onyx px-4 py-2 rounded hover:bg-keppel hover:text-platinum transition-colors"
    //         onClick={(e) => addToCart(e, product)}
    //       >
    //         Add to Cart
    //       </button>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
}

export default Products;