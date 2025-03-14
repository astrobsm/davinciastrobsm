import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import companyLogo from '../assets/companyLogo.png'; // Ensure this path is correct
import './Dashboard.css'; // Import the CSS file for styling

const Dashboard = () => {
  return (
    <div className="dashboard">
      <img src={companyLogo} alt="Company Logo" className="company-logo" />
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/dashboard/products">Product List</Link></li>
          <li><Link to="/dashboard/add-product">Add Product</Link></li>
          <li><Link to="/dashboard/product-intake">Product Intake</Link></li>
          <li><Link to="/dashboard/invoice">Generate Invoice</Link></li>
          <li><Link to="/dashboard/reports">Reports</Link></li>
          <li><Link to="/dashboard/customer-performance">Customer Performance</Link></li>
          <li><Link to="/dashboard/stock-level">Stock Level</Link></li> {/* Add Stock Level link */}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Dashboard;