import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Navbar from './navbar';

const ViewItemsPurchased = () => {
return (
  <>
  <div className="table-inner">
    <h3>View Items Purchased</h3>

    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Issue ID</th>
          <th scope='col'>Item Description</th>
          <th scope='col'>Item Make</th>
          <th scope='col'>Item Category</th>
          <th scope='col'>Item Valuation</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>
            <p classNmae='fw-bold mb-1'>100001</p>
          </td>
          <td>
            <p classNmae='fw-bold mb-1'>Tea Table</p>
          </td>
          <td>
            <p classNmae='fw-bold mb-1'>Wooden</p>
          </td>
          <td>
            <p classNmae='fw-bold mb-1'>Furniture</p>
          </td>
          <td>
            <p classNmae='fw-bold mb-1'>5000</p>
          </td>
        </tr>
        <tr>
          <td>
            <p classNmae='fw-bold mb-1'>100002</p>
          </td>
          <td>
            <p classNmae='fw-bold mb-1'>Tea Set</p>
          </td>
          <td>
            <p classNmae='fw-bold mb-1'>Glass</p>
          </td>
          <td>
            <p classNmae='fw-bold mb-1'>Crockery</p>
          </td>
          <td>
            <p classNmae='fw-bold mb-1'>1000</p>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  </div>
  </>
);
}

export default ViewItemsPurchased;
