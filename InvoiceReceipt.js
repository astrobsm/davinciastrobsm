import React from 'react';
import companyLogo from '../assets/companyLogo.png'; // Ensure this path is correct
import './InvoiceReceipt.css'; // Import the CSS file for styling

const InvoiceReceipt = ({ invoiceData }) => {
  return (
    <div className="invoice-receipt">
      <div className="header">
        <img src={companyLogo} alt="Company Logo" className="company-logo" />
        <h1>BONNESANTE MEDICALS</h1>
      </div>
      <h2>Invoice</h2>
      <p><strong>Invoice Number:</strong> {invoiceData.invoiceNumber}</p>
      <p><strong>Date:</strong> {invoiceData.invoiceDate}</p>
      <p><strong>Customer Name:</strong> {invoiceData.customerName}</p>
      <table className="invoice-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {invoiceData.items.length > 0 ? (
            invoiceData.items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.total}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center' }}>No items</td>
            </tr>
          )}
        </tbody>
      </table>
      <h3>Total Amount: {invoiceData.totalAmount}</h3>
      <div className="bank-details">
        <p><strong>Account Number:</strong> 1379643548</p>
        <p><strong>Bank Name:</strong> Access Bank</p>
        <p><strong>Account Name:</strong> BONNESANTE MEDICALS</p>
        <p><strong>Account Number:</strong> 8259518195</p>
        <p><strong>Bank Name:</strong> Moniepoint</p>
        <p><strong>Account Name:</strong> BONNESANTE MEDICALS</p>
      </div>
      <div className="footer">
        <p>Thank you for working with BONNESANTE MEDICALS. We appreciate your business and look forward to serving you again.</p>
      </div>
    </div>
  );
};

export default InvoiceReceipt;