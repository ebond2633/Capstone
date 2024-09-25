import React, { useState, useEffect } from 'react';


function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-500 mb-4">Products</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
            <img src={product.img_url} alt={product.name} style={{ width: '100%', height: 'auto' }} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;