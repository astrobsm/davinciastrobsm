import React, { useEffect, useState } from 'react';

const CustomerPerformance = () => {
  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    // Fetch customer data from an API or leave it empty for now
    // Example: fetch('/api/customers').then(response => response.json()).then(data => setCustomerData(data));
  }, []);

  return (
    <div>
      <h2>Customer Performance</h2>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Invoices Paid</th>
            <th>Invoices Unpaid</th>
            <th>Total Contribution (%)</th>
            <th>Paid Contribution (%)</th>
          </tr>
        </thead>
        <tbody>
          {customerData.length > 0 ? (
            customerData.map((customer, index) => (
              <tr key={index}>
                <td>{customer.name}</td>
                <td>{customer.invoicesPaid}</td>
                <td>{customer.invoicesUnpaid}</td>
                <td>{customer.totalContribution}%</td>
                <td>{customer.paidContribution}%</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No customer data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerPerformance;