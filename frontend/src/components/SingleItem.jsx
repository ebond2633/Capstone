import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StoreProvider } from "../store/ContextProvider"; 

const SingleItem = () => {
  const { id } = useParams();
  const { state, dispatch } = useContext(StoreProvider);
  const [item, setItem] = useState(null);
  const [data, setData] = useState(null);

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
  const addToCart = async () => {
    try {
      const response = await fetch(`http://localhost:8080/products/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId: item.id, quantity: 1 }),
      });

      if (response.ok) {
        const data = await response.json();
        dispatch({ type: "ADD_TO_CART", payload: data });
        console.log("Item added to cart:", data);
      } else {
        console.error("Failed to add item to cart");
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  return (
    <div>
      <img src={item.img_url} alt={item.name} />
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p> 
      <button onClick={addToCart}>Add to Cart</button>
     
    </div>
  );
};

export default SingleItem;
