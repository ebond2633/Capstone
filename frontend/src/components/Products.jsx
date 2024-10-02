import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
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
    const newProduct = { ...product, quantity: 1 };
    dispatch({ type: "ADD_TO_CART", payload: newProduct});
  };

  useEffect(() => {
    fetch('http://localhost:8080/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);
  console.log(products);
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.productID} 
              className="group cursor-pointer"
              onClick={() => handleItemClick(product.productID)}
            >
            <Link to={`/singleItem/${product.productID}`}   >
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 mb-4">
                <img
                  alt={product.description}
                  src={product.img_url}
                  className=" w-full object-contain object-center group-hover:opacity-75 transition-opacity duration-300 h-40"
                />
              </div>
              </Link>
              <h3 className="text-sm text-gray-700">{product.productID}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
              <button
                onClick={(e) => {
                  navigate(`/products/${product.productID}`);
                  addToCart(e, product)}}
                className="mt-2 w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition-colors duration-300"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
 


  );
}

export default Products;