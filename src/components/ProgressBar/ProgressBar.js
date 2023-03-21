import React from 'react';

const ProgressBar = ({currentTime, duration}) => {
  const percentage = (currentTime / duration) * 100;

  return (
    <div className="progress-bar">
      <div className="progress" style={{width: `${percentage}%`}} />
    </div>
  );
};

export default ProgressBar;