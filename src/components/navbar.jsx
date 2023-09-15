import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand">
              LOAN MANAGEMENT
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/viewloan'}>
                    Loan Card Management
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/viewcustomer'}>
                    Customer Data Management
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/viewitem'}>
                    Item Data Management
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}
