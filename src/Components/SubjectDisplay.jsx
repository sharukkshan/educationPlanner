import React from 'react';
import './SubjectDisplay.css';

const SubjectDisplay = ({ subject, hours, onIncrement, onDecrement }) => {
  return (
    <div className="subject-row">
      <span>{subject} - {hours}</span>
      <span className="btngroup">
        <button onClick={onDecrement}>Decrement</button>
        <button onClick={onIncrement}>Increment</button>
      </span>
    </div>
  );
};

export default SubjectDisplay;