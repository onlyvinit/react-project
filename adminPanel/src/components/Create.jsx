import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Create() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleCreateAccount = async (e) => {
    e.preventDefault();

    const newUser = { username, password };

    try {
      const response = await fetch('http://localhost:3000/userdata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        alert('Account created successfully!');
        navigate('/'); 
      } else {
        alert('Failed to create account. Please try again.');
      }
    } catch (error) {
      console.error('Error creating account:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', textAlign: 'center',borderRadius: '6px', marginBlock: '6vh',
      boxShadow: ' 0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h1>Create Account</h1>
      <form onSubmit={handleCreateAccount}>
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
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Create;
