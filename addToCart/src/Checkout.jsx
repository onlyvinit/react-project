import React, { useState, useEffect } from 'react';

function Checkout() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedItems);
  }, []);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const updateQuantity = (index, delta) => {
    const updatedCart = [...cartItems];

  
    updatedCart[index].quantity += delta;

  
    if (updatedCart[index].quantity < 0) {
      updatedCart[index].quantity = 0;
    }

    
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));

    const totalCount = updatedCart.reduce((count, item) => count + item.quantity, 0);
    localStorage.setItem('cartCount', totalCount);

    const event = new Event('cartUpdated');
    window.dispatchEvent(event);
  };

  const handleCheckout = () => {
    localStorage.removeItem('cartItems');
    localStorage.setItem('cartCount', 0);
    setCartItems([]);

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
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <button
                      onClick={() => updateQuantity(index, -1)}
                      className="quantity-button"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(index, 1)}
                      className="quantity-button"
                    >
                      +
                    </button>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2>Total: ${totalPrice.toFixed(2)}</h2>
          <button onClick={handleCheckout} className="checkout-button">
            Checkout
          </button>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Checkout;
