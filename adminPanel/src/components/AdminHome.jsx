import React, { useEffect, useState } from 'react';
import '../components/adminhome.css';

function AdminHome() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ title: '', price: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [showAddProductForm, setShowAddProductForm] = useState(false); // State to toggle form visibility


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3000/userdata');
        if (!response.ok) throw new Error('Failed to fetch user data');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
        setErrorMessage('An error occurred while fetching users.');
      }
    };

    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/product');
        if (!response.ok) throw new Error('Failed to fetch product data');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
        setErrorMessage('An error occurred while fetching products.');
      }
    };

    fetchUsers();
    fetchProducts();
  }, []);

  // Handle deleting a user
  const handleDeleteUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/userdata/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setUsers(users.filter((user) => user.id !== id));
        alert('User deleted successfully!');
      } else {
        throw new Error('Failed to delete user');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while deleting the user.');
    }
  };

  const handleEditUser = (id) => {
    alert(`Edit functionality for user ID: ${id} coming soon!`);
  };

  const handleDeleteProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/product/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setProducts(products.filter((product) => product.id !== id));
        alert('Product removed successfully!');
      } else {
        throw new Error('Failed to delete product');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while removing the product.');
    }
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (!newProduct.title || !newProduct.price) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: Math.random().toString(36).substr(2, 9),
          title: newProduct.title,
          price: newProduct.price,
        }),
      });

      if (response.ok) {
        const addedProduct = await response.json();
        setProducts([...products, addedProduct]);
        setNewProduct({ title: '', price: '' });
        alert('Product added successfully!');
      } else {
        throw new Error('Failed to add product');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while adding the product.');
    }
  };

  const toggleAddProductForm = () => {
    setShowAddProductForm(!showAddProductForm);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Admin Dashboard</h1>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      {/* User Management Section */}
      <h2 className="section-title">User Management</h2>
      {users.length > 0 ? (
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>User Title</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>
                  <button onClick={() => handleEditUser(user.id)} className="btn btn-edit">
                    Edit
                  </button>
                  <button onClick={() => handleDeleteUser(user.id)} className="btn btn-delete">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-data-message">No users available.</p>
      )}

      {/* Product Management Section */}
      <h2 className="section-title">Product Management</h2>
      {products.length > 0 ? (
        <table className="product-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>${product.price}</td>
                <td>
                  <button onClick={() => handleDeleteProduct(product.id)} className="btn btn-remove">
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-data-message">No products available.</p>
      )}

      {/* Add Product Form */}
      {showAddProductForm && (
        <form className='productForm' onSubmit={handleAddProduct} style={{ marginTop: '20px' }}>
          <h2>Add product</h2>
          <div style={{ marginBottom: '15px' }}>
            <label>
              Product Title:
              <input
                type="text"
                value={newProduct.title}
                onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                required
              />
            </label>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>
              Product Price:
              <input
                type="number"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                required
              />
            </label>
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: '#28A745',
              color: '#FFF',
              border: 'none',
              padding: '10px 15px',
              cursor: 'pointer',
              borderRadius: '5px',
            }}
          >
            Add Product
          </button>
        </form>
      )}
      {/* toggle button  */}
      <button
        className="add"
        onClick={toggleAddProductForm}
      >
        {showAddProductForm ? 'Hide Add Product Form' : 'Add Product'}
      </button>
    </div>
  );
}

export default AdminHome;
