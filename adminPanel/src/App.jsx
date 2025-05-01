import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import AdminHome from './components/AdminHome';
import Create from './components/Create';
import CreateAdmin from './components/CreateAdmin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login Page as Default */}
        <Route path="/" element={<Login />} />
        
        {/* User Routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
        
        {/* Admin Routes */}
        <Route path="/admin-home" element={<AdminHome />} />
        <Route path="/create-admin" element={<CreateAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
