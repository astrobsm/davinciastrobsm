import React from 'react';
import { Link } from 'react-router-dom';
import './Reports.css'; // Add custom styles for the reports

const Reports = () => {
  return (
    <div className="reports">
      <h2>Reports</h2>
      <div className="report-section">
        <h3>Summary Reports</h3>
        <ul>
          <li><Link to="/reports/weekly">Weekly Summary</Link></li>
          <li><Link to="/reports/monthly">Monthly Summary</Link></li>
          <li><Link to="/reports/quarterly">Quarterly Summary</Link></li>
          <li><Link to="/reports/annual">Annual Summary</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Reports;