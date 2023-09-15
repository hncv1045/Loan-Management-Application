import React, { useState } from 'react';

const ApplyLoans = () => {
  // State for form fields
  const [employeeId, setEmployeeId] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemMake, setItemMake] = useState('default');
  const [itemCategory, setItemCategory] = useState('default');
  const [itemValue, setItemValue] = useState('');

  // State for popup message
  const [showPopup, setShowPopup] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission (e.g., send data to server)
    // For demonstration, we'll just show the popup message
    setShowPopup(true);
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Loan Management Application</h2>
      <h3 className="text-center mb-4">Select Product and Apply for Loan</h3>
      <div className="d-flex justify-content-center">
        <form onSubmit={handleSubmit} className="apply-loan-form">
          <div className="form-group">
            <label htmlFor="employeeId">Employee ID</label>
            <input
              type="text"
              className="form-control"
              id="employeeId"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="itemDescription">Item Description</label>
            <input
              type="text"
              className="form-control"
              id="itemDescription"
              value={itemDescription}
              onChange={(e) => setItemDescription(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="itemMake">Item Make</label>
            <select
              className="form-control"
              id="itemMake"
              value={itemMake}
              onChange={(e) => setItemMake(e.target.value)}
              required
            >
              <option value="default">Select Make</option>
              <option value="wooden">Wooden</option>
              <option value="glass">Glass</option>
              <option value="metal">Metal</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="itemCategory">Item Category</label>
            <select
              className="form-control"
              id="itemCategory"
              value={itemCategory}
              onChange={(e) => setItemCategory(e.target.value)}
              required
            >
              <option value="default">Select Category</option>
              <option value="furniture">Furniture</option>
              <option value="electronics">Electronics</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="itemValue">Item Value</label>
            <input
              type="text"
              className="form-control"
              id="itemValue"
              value={itemValue}
              onChange={(e) => setItemValue(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Apply Loan</button>
        </form>
      </div>

      {/* Popup message */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Loan applied successfully!</p>
            <button className="btn btn-primary" onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ApplyLoans;
