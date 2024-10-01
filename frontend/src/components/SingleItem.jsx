import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StoreProvider } from "../store/ContextProvider"; 

const SingleItem = () => {
  const { id } = useParams();
  const { state, dispatch } = useContext(StoreProvider);
  const [item, setItem] = useState(null);
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the single item from the API
    const fetchItem = async () => {
      try {
        const response = await fetch(`http://localhost:8080/products/${id}`);
        const data = await response.json();
        setItem(data);
        console.log(data)
        
      } catch (error) {
        console.error("Error fetching item:", error);
      }
    };

    fetchItem();
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }
  console.log(data)
  const addToCart = (e, product) => {
    e.stopPropagation();
    const newProduct = { ...product, quantity: 1 };
    dispatch({ type: "ADD_TO_CART", payload: newProduct});
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-black to-gray-500 ">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <img src={item.img_url} alt={item.name} className="w-full h-auto mb-4 rounded" />
        <h1 className="text-2xl font-bold mb-2">{item.name}</h1>
        <p className="text-gray-700 mb-4">{item.description}</p>
        <p className="text-xl font-semibold mb-4">Price: ${item.price}</p>
        <button
          onClick={(e) => {
            navigate(`/cart`);
            addToCart(e, item);
          }}
          className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleItem;
