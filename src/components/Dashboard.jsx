import styles from "./Dashboard.module.css"

import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="navbar-top">
        <div className="dashboard-container">
        <nav className="navbar-top-part navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
            <h2 style={{color:"white"}}>Loan Management Application</h2>
            </div>
        </nav>
        <div className="container dashboard-content">
            <h2 className="dashboard-heading">Welcome to Your Dashboard</h2>
            <div className="row">
            <div className="col-md-4">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">View Loans</h5>
                    <p className="card-text">View and manage your loans</p>
                    <Link to="/view-loans" className="btn btn-primary">Go</Link>
                </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Apply for Loans</h5>
                    <p className="card-text">Apply for a new loan</p>
                    <Link to="/apply-loans" className="btn btn-primary">Apply Now</Link>
                </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">View Items Purchased</h5>
                    <p className="card-text">Check your purchase history</p>
                    <Link to="/view-items-purchased" className="btn btn-primary">View Items</Link>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Dashboard;
