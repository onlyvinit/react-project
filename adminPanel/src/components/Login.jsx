import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './Login.css'; // CSS file for flip styles

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e, type) => {
    e.preventDefault();
    try {
      const url = type === 'user' ? 'http://localhost:3000/userdata' : 'http://localhost:3000/adminInfo';
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch data');

      const data = await response.json();
      const userOrAdmin = data.find((item) => item.username === username && item.password === password);

      if (userOrAdmin) {
        alert(`${type === 'user' ? 'User' : 'Admin'} logged in successfully!`);
        navigate(type === 'user' ? '/home' : '/admin-home');
      } else {
        setErrorMessage('Invalid username or password');
      }
    } catch (error) {
      setErrorMessage('An error occurred while logging in');
      console.error(error);
    }
  };

  return (
    <div className="login-wrapper">
      <div className={`login-card ${isFlipped ? 'flipped' : ''}`}>
        {/* Front Side (User Login) */}
        <div className="login-card-face login-card-front">
          <h1 className="login-title">User Login</h1>
          <form className="login-form">
            <div className="form-group">
              <label>
                Username:
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="input-field"
                  required
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field"
                  required
                />
              </label>
            </div>
            <div className="button-group">
              <button type="button" onClick={(e) => handleLogin(e, 'user')} className="btn btn-user">
                Log In as User
              </button>
              <button type="button" onClick={() => navigate('/create')} className="btn btn-create-user">
                Create New User
              </button>
            </div>
            <button type="button" className="btn btn-flip" onClick={() => setIsFlipped(true)}>
              Flip to Admin
            </button>
          </form>
        </div>

        {/* Back Side (Admin Login) */}
        <div className="login-card-face login-card-back">
          <h1 className="login-title">Admin Login</h1>
          <form className="login-form">
            <div className="form-group">
              <label>
                Username:
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="input-field"
                  required
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field"
                  required
                />
              </label>
            </div>
            <div className="button-group">
              <button type="button" onClick={(e) => handleLogin(e, 'admin')} className="btn btn-admin">
                Log In as Admin
              </button>
              <button type="button" onClick={() => navigate('/create-admin')} className="btn btn-create-admin">
                Create Admin
              </button>
            </div>
            <button type="button" className="btn btn-flip" onClick={() => setIsFlipped(false)}>
              Flip to User
            </button>
          </form>
        </div>
      </div>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default Login;
