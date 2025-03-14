import React from 'react';
import { useNavigate } from 'react-router-dom';

function ReportsNavigation() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div>
      <h2>Reports</h2>
      <h3>Weekly Reports</h3>
      <button onClick={() => handleNavigation('/reports/weekly/sales-summary')}>Sales Summary</button>
      <button onClick={() => handleNavigation('/reports/weekly/inventory-levels')}>Inventory Levels</button>
      <button onClick={() => handleNavigation('/reports/weekly/customer-acquisition')}>Customer Acquisition</button>
      <button onClick={() => handleNavigation('/reports/weekly/sales-channel-performance')}>Sales Channel Performance</button>
      <button onClick={() => handleNavigation('/reports/weekly/top-selling-categories')}>Top-Selling Categories</button>

      <h3>Monthly Reports</h3>
      <button onClick={() => handleNavigation('/reports/monthly/sales-trend')}>Monthly Sales Trend</button>
      <button onClick={() => handleNavigation('/reports/monthly/inventory-turnover')}>Inventory Turnover</button>
      <button onClick={() => handleNavigation('/reports/monthly/customer-segmentation')}>Customer Segmentation</button>
      <button onClick={() => handleNavigation('/reports/monthly/product-performance')}>Product Performance</button>
      <button onClick={() => handleNavigation('/reports/monthly/supplier-performance')}>Supplier Performance</button>

      <h3>Quarterly Reports</h3>
      <button onClick={() => handleNavigation('/reports/quarterly/sales-performance')}>Quarterly Sales Performance</button>
      <button onClick={() => handleNavigation('/reports/quarterly/inventory-optimization')}>Inventory Optimization</button>
      <button onClick={() => handleNavigation('/reports/quarterly/customer-loyalty')}>Customer Loyalty</button>
      <button onClick={() => handleNavigation('/reports/quarterly/market-trends')}>Market Trends</button>
      <button onClick={() => handleNavigation('/reports/quarterly/financial-performance')}>Financial Performance</button>

      <h3>Annual Reports</h3>
      <button onClick={() => handleNavigation('/reports/annual/sales-performance')}>Annual Sales Performance</button>
      <button onClick={() => handleNavigation('/reports/annual/inventory-valuation')}>Inventory Valuation</button>
      <button onClick={() => handleNavigation('/reports/annual/customer-lifetime-value')}>Customer Lifetime Value</button>
      <button onClick={() => handleNavigation('/reports/annual/market-share')}>Market Share</button>
      <button onClick={() => handleNavigation('/reports/annual/financial-review')}>Financial Review</button>

      <h3>Customer Performance Reports</h3>
      <button onClick={() => handleNavigation('/reports/customer/sales-history')}>Customer Sales History</button>
      <button onClick={() => handleNavigation('/reports/customer/loyalty-metrics')}>Customer Loyalty Metrics</button>
      <button onClick={() => handleNavigation('/reports/customer/demographics')}>Customer Demographics</button>
      <button onClick={() => handleNavigation('/reports/customer/behavior')}>Customer Behavior</button>
      <button onClick={() => handleNavigation('/reports/customer/feedback')}>Customer Feedback</button>
    </div>
  );
}

export default ReportsNavigation;