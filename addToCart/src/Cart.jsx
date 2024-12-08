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
    // Retrieve existing cart items from localStorage
    const currentCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    const updatedCart = [...currentCart, product];

    // Save updated cart to localStorage
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));

    // Update cart count
    const currentCount = parseInt(localStorage.getItem('cartCount')) || 0;
    localStorage.setItem('cartCount', currentCount + 1);

    // Notify Navbar of cart updates
    const event = new Event('cartUpdated');
    window.dispatchEvent(event);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
