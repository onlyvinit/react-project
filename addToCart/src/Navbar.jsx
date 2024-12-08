import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const storedCount = parseInt(localStorage.getItem('cartCount')) || 0;
    setCartCount(storedCount);

    const handleCartUpdate = () => {
      const updatedCount = parseInt(localStorage.getItem('cartCount')) || 0;
      setCartCount(updatedCount);
    };

    window.addEventListener('cartUpdated', handleCartUpdate);

    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate);
    };
  }, []);

  return (
    <nav>
      <h2>Shope.</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>About</li>
        <li>More</li>
        <li>
          <Link to="/checkout">
            <i className="ri-shopping-cart-fill"><span></span></i> ({cartCount})
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
