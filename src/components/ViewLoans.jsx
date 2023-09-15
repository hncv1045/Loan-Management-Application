import React, { useState } from 'react';

const ViewLoans = () => {
  const [heading, setHeading] = useState('');

  const handleButtonClick = () => {
    // Set the desired heading upon button click
    setHeading('View Loans Applied');
  };

  return (
    <div>
      <h3>View Loans</h3>
      <button className="btn btn-primary" onClick={handleButtonClick}>
        View Loans Applied
      </button>
      {heading && <h4>{heading}</h4>}
    </div>
  );
}

export default ViewLoans;
