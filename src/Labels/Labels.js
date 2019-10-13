import React from 'react';
import '../App.css';

const Labels = ({ cb }) => {

  const timers = [
    {
      id: 1,
      label: "1 min",
      color: { background: '#e76022' }
    },
    {
      id: 2,
      label: "5 min",
      color: { background: '#1E90FF' }
    },
    {
      id: 3,
      label: "10 min",
      color: { background: '#DA312E' }
    },
    {
      id: 4,
      label: "15 min",
      color: { background: '#dbb701' }
    },
    {
      id: 5,
      label: "30 min",
      color: { background: '#d22a4e' }
    },
    {
      id: 6,
      label: "60 min",
      color: { background: '#02b9e3' }
    }
  ];

  const renderTimers = timers.map((label, index) => {
    return <button className="AppBox" style={label.color} key={index} onClick={() => cb(label.id)}><h2>{label.label}</h2> </button >
  })

  return (
    <div className="Left">
      {renderTimers}
    </div>
  );
};

export default Labels;