
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, updateItem, deleteItem, setItems } from './redux/itemsSlice';

const App = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items.items);
  const [newItem, setNewItem] = useState('');
  const [editItem, setEditItem] = useState(null);
  const [updatedValue, setUpdatedValue] = useState('');

  const handleAddItem = () => {
    if (newItem.trim()) {
      dispatch(addItem({ id: Date.now(), name: newItem }));
      setNewItem('');
    }
  };

  const handleUpdateItem = () => {
    if (updatedValue.trim()) {
      dispatch(updateItem({ id: editItem.id, updatedData: { name: updatedValue } }));
      setEditItem(null);
      setUpdatedValue('');
    }
  };

  const handleDeleteItem = (id) => {
    dispatch(deleteItem(id));
  };

  const handleEditItem = (item) => {
    setEditItem(item);
    setUpdatedValue(item.name);
  };

  return (
    <div>
      <h1>Redux Toolkit CRUD Operations</h1>

      {/* Add Item Form */}
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Enter item"
      />
      <button onClick={handleAddItem}>Add Item</button>

      {/* Edit Item Form */}
      {editItem && (
        <div>
          <input
            type="text"
            value={updatedValue}
            onChange={(e) => setUpdatedValue(e.target.value)}
            placeholder="Edit item"
          />
          <button onClick={handleUpdateItem}>Update Item</button>
        </div>
      )}

      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}
            <div className="buttons">
            <button onClick={() => handleEditItem(item)}>Edit</button>
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
