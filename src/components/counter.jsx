import React, { useState } from 'react';

const Counter = () => {
  // State to keep track of the count value
  const [count, setCount] = useState(0);

  // Increment function
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement function
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <h2>Counter: {count}</h2>
      <div className="counter-buttons">
        <button onClick={decrement} className="counter-btn decrement-btn">-</button>
        <button onClick={increment} className="counter-btn increment-btn">+</button>
      </div>
    </div>
  );
};

export default Counter;
