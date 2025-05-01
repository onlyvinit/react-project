import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateAdmin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleCreateAdmin = async (e) => {
    e.preventDefault();

    try {
      const newAdmin = { username, password };

      const response = await fetch('http://localhost:3000/adminInfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAdmin),
      });

      if (response.ok) {
        alert('Admin account created successfully!');
        navigate('/admin-home'); 
      } else {
        alert('Failed to create admin account');
      }
    } catch (error) {
      console.error('Error creating admin:', error);
      alert('An error occurred while creating the admin account');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', textAlign: 'center' }}>
      <h1>Create Admin Account</h1>
      <form onSubmit={handleCreateAdmin}>
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
            backgroundColor: '#007BFF',
            color: '#FFF',
            border: 'none',
            padding: '10px 15px',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
        >
          Create Admin
        </button>
      </form>
    </div>
  );
}

export default CreateAdmin;
