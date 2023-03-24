import React from 'react'
import '../css/timeDisplay.scss';

const TimeDisplay = ({ value, type, isDanger }) => {
    return (
      <div className={isDanger ? 'countdown-danger' : 'countdown'}>
        <span className='number'>{value}</span>
        <span>{type}</span>
      </div>
    );
  };

export default TimeDisplay