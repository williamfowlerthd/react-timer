import React from 'react';
import '../App.css';

const box = {
  width: '137.5px',
  height: '137.5px',
  overflow: 'hidden',
  fontSize: '13px',
  padding: '10px',
  display: 'block',
  float: 'left',
  margin: '5px',
  background: '#e76022',
  color: 'white'
};

const PlusButton = ({ count, increaseCount }) => {
  return (
    // increment button adds 30 seconds to the remaining time
    <button style={box} onClick={() => increaseCount(count + 30)}><h2>+ :30</h2></button>
  )
};

export default PlusButton;