import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FruitCard from './FruitCard';

function FruitIndex() {
  const [loading, setLoading] = useState(true);
  const [apiData, setApiData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFiltered] = useState([]);

  const getFruits = () =>
    axios
      .get('/fruits')
      .then((response) => response.data)
      .then((data) => {
        setApiData((fruit) => [...fruit, ...data]);
        setLoading(false);
      });
  useEffect(() => {
    getFruits();
  }, []);

  useEffect(() => {
    const filtered = apiData.filter((f) =>
      f.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFiltered(filtered);
  }, [searchTerm]);

  return (
    <div className="fruit-container">
      <input
        className="search"
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {loading ? (
        <div className="loading"></div>
      ) : (
        filteredResults.map((f, i) => {
          return (
            <div className="fruit" key={i}>
              <FruitCard {...f} />
            </div>
          );
        })
      )}
    </div>
  );
};

export default FruitIndex;
