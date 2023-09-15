import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/login';
import SignUp from './components/signup';
import Navbar from './components/navbar';
import Table from './components/table';
import Viewcustomer from './components/viewcustomer';
import Viewitem from './components/viewitem';
import Viewloan from './components/viewloan';
import Dashboard from './components/Dashboard'; // Import the Dashboard component
import ViewItemsPurchased from './components/ViewItemsPurchased'; // Import the ViewItems component
import ApplyLoans from './components/ApplyLoans'; // Import the ApplyLoans component
import ViewLoans from './components/ViewLoans'; // Import the ViewLoans component
// import ViewItemsPurchased from './components/ViewItemsPurchased';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <div className="auth-wrapper">
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/table" element={<Table />} />
            <Route path="/viewcustomer" element={<Viewcustomer />} />
            <Route path="/viewloan" element={<Viewloan />} />
            <Route path="/viewitem" element={<Viewitem />} />  
          </Routes>
        </div>
        <div className="navbar-top">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/view-items-purchased" element={<ViewItemsPurchased />} />
            <Route path="/apply-loans" element={<ApplyLoans />} />
            <Route path="/view-loans" element={<ViewLoans />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
