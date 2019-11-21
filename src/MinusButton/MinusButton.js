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
  background: '#dbb701',
  color: 'white',
  borderWidth: '0px'
};

const MinusButton = ({ count, decreaseCount }) => {
  return (
    // increment button subtracts 30 seconds to the remaining time
    <button style={box} onClick={() => decreaseCount(count - 30)}><h2>- :30</h2></button>
  )
}

export default MinusButton;
