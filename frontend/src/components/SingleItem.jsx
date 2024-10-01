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
    <div>
      <img src={item.img_url} alt={item.name} />
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p> 
      <button  onClick={(e) => {
        navigate(`/cart`)
        addToCart(e, item); }} >Add to Cart</button>
     
    </div>
  );
};

export default SingleItem;
