import React, { useState, useEffect } from 'react';

function Checkout() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve items from localStorage
    const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedItems);
  }, []);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handleCheckout = () => {
    // Clear cart from localStorage and state
    localStorage.removeItem('cartItems');
    localStorage.setItem('cartCount', 0);
    setCartItems([]);
    
    // Notify Navbar of cart updates
    const event = new Event('cartUpdated');
    window.dispatchEvent(event);

    alert('Checkout complete! Your cart is now empty.');
  };

  return (
    <div>
      <h1>Checkout</h1>
      {cartItems.length > 0 ? (
        <div className="items">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>${item.price.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2>Total: ${totalPrice.toFixed(2)}</h2>
          <button onClick={handleCheckout} className="checkout-button">Checkout</button>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Checkout;
