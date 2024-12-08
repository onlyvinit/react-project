import React, { useState, useEffect } from 'react';

function Cart() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
  const currentCart = JSON.parse(localStorage.getItem('cartItems')) || [];

  const existingProductIndex = currentCart.findIndex((item) => item.id === product.id);

  if (existingProductIndex >= 0) {
    currentCart[existingProductIndex].quantity += 1;
  } else {
    currentCart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem('cartItems', JSON.stringify(currentCart));

  const totalCount = currentCart.reduce((count, item) => count + item.quantity, 0);
  localStorage.setItem('cartCount', totalCount);

  const event = new Event('cartUpdated');
  window.dispatchEvent(event);
};


  return (
    <div>
      <h1>Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h2>{product.title}</h2>
            <p><strong>Price:</strong> ${product.price}</p>
            <button onClick={() => handleAddToCart(product)} className="add-to-cart-button">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
