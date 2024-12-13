import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DataTable() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGender, setFilterGender] = useState('');
  const [filterNetWorth, setFilterNetWorth] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/userdata');
        // console.log('Data fetched successfully:', response.data);
        setData(response.data);
        setFilteredData(response.data);
      } catch (error) {
        // console.error('Error fetching data:', error.message);
        if (error.response) {
          console.error('Response data:', error.response.data);
          console.error('Response status:', error.response.status);
          console.error('Response headers:', error.response.headers);
        }
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let updatedData = data;

    if (searchTerm) {
      updatedData = updatedData.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterGender) {
      updatedData = updatedData.filter(item => 
        item.gender.toLowerCase() === filterGender.toLowerCase()
      );
    }

    if (filterNetWorth) {
      const [min, max] = filterNetWorth.split('-').map(Number);
      updatedData = updatedData.filter(item => 
        item.netWorth >= min && item.netWorth <= max
      );
    }

    if (sortOrder) {
      updatedData.sort((a, b) => {
        if (sortOrder === 'asc') {
          return a.netWorth - b.netWorth;
        } else if (sortOrder === 'desc') {
          return b.netWorth - a.netWorth;
        }
        return 0;
      });
    }

    setFilteredData(updatedData);
  }, [searchTerm, filterGender, filterNetWorth, sortOrder, data]);

  return (
    <div className="data-table-container">
      <div className="filters-container">
        <input 
          type="text" 
          placeholder="Search by name..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          className="search-input"
        />

        <select onChange={(e) => setFilterGender(e.target.value)} className="filter-select">
          <option value="">Filter by Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <select onChange={(e) => setFilterNetWorth(e.target.value)} className="filter-select">
          <option value="">Filter by Net Worth</option>
          <option value="0-10000000000">0 - 10,000,000,000</option>
          <option value="100001-50000000000">10,000,000,000 - 50,000,000,000</option>
          <option value="500001-10000000000">50,000,000,001 - 10,000,000,000</option>
        </select>

        <select onChange={(e) => setSortOrder(e.target.value)} className="filter-select">
          <option value="">Sort by Net Worth</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      <div className="cards-container">
        {filteredData.map((user, index) => (
          <div key={index} className="user-card">
            <h3>{user.name}</h3>
            <p><strong>Gender:</strong> {user.gender}</p>
            <p><strong>Net Worth:</strong> ${user.net_worth}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataTable;
