import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/" className="navbar-logo-link">
            <strong>Cinema</strong>
          </a>
        </div>

        <div className="navbar-links">
          <ul className="navbar-menu">
            <li className="navbar-item">
              <a href="/" className="navbar-link">Home</a>
            </li>
            <li className="navbar-item">
              <a href="/movies" className="navbar-link">Movies</a>
            </li>
            <li className="navbar-item">
              <a href="/about" className="navbar-link">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
