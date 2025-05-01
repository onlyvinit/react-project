import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleAdminLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/adminInfo');
      if (!response.ok) throw new Error('Failed to fetch admin data');
      const admins = await response.json();

      const admin = admins.find((a) => a.username === username && a.password === password);
      if (admin) {
        alert('Admin logged in successfully!');
        navigate('/admin-home'); // Redirect to AdminHome page
      } else {
        setErrorMessage('Invalid admin username or password');
      }
    } catch (error) {
      setErrorMessage('An error occurred while logging in');
      console.error(error);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', textAlign: 'center' }}>
      <h1>Admin Login</h1>
      <form onSubmit={handleAdminLogin}>
        <div style={{ marginBottom: '15px' }}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              required
            />
          </label>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              required
            />
          </label>
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: '#DC3545',
            color: '#FFF',
            border: 'none',
            padding: '10px 15px',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
        >
          Log In
        </button>
        <button
          type="button"
          onClick={() => navigate('/create-admin')}
          style={{
            backgroundColor: '#28A745',
            color: '#FFF',
            border: 'none',
            padding: '10px 15px',
            cursor: 'pointer',
            borderRadius: '5px',
            marginLeft: '10px',
          }}
        >
          Create Admin
        </button>
      </form>
      {errorMessage && <p style={{ color: 'red', marginTop: '15px' }}>{errorMessage}</p>}
    </div>
  );
}

export default AdminLogin;
