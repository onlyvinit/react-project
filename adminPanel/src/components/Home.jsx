import React, { useState, useEffect } from 'react';
import '../components/home.css'

function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/product');
        if (!response.ok) throw new Error('Failed to fetch product data');
        const data = await response.json();
        setProducts(data); 
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className='main'>
      <h1>Welcome to Home</h1>

      {error ? (
        <p style={{ color: 'red' }}>Error: {error}</p>
      ) : products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        <div className='product'>
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                border: '1px solid #ccc',
                borderRadius: '5px',
                padding: '10px',
                width: '200px',
                textAlign: 'center',
              }}
            >
              <h4>{product.title}</h4>
              <p>Price: ${product.price}</p>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', height: '150px', objectFit: 'cover' }}
              />
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
