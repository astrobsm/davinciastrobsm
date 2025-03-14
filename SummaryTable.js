import React from 'react';

const SummaryTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>New Customers</th>
          <th>Existing Customers</th>
          <th>Invoices Generated</th>
          <th>Payment Received</th>
          <th>Unpaid Invoices</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((summary, index) => (
            <tr key={index}>
              <td>{summary.newCustomers}</td>
              <td>{summary.existingCustomers}</td>
              <td>{summary.invoicesGenerated}</td>
              <td>{summary.paymentReceived}</td>
              <td>{summary.unpaidInvoices}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5">No data available</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default SummaryTable;