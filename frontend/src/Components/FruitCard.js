import React, { useState } from 'react';
import Button from '@mui/material/Button';

function FruitCard({ genus, name, family, order }) {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <div className="text">
        <Button
          id="liker"
          variant="solid"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          {' '}
          &hearts; {count}
        </Button>
        <h2>{name}</h2>
        <p>Genus: {genus}</p>
        <p>Family: {family}</p>
        <p>Order: {order}</p>
      </div>
    </div>
  );
}

export default FruitCard;
