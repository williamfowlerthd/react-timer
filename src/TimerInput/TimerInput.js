import React from 'react';
import '../App.css';

const TimerInput = (props) => {

  return (
    <div className="AppWide" style={{ background: '#d22a4e' }}>
      <h3>Input time in minutes</h3>
      <input style={{ width: 50, height: 35 }} type="number" value={props.value} onChange={props.newInput} required />
      <h3>Press enter</h3>
    </div>
  )

}

export default TimerInput;