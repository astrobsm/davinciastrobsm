import React, { useState, useEffect } from 'react';
import api from '../utils/api';

function CustomerPerformancePage() {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await api.get('/customers');
        setCustomers(response.data);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    fetchCustomers();
  }, []);

  const handleCustomerChange = (e) => {
    setSelectedCustomer(e.target.value);
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    if (name === 'startDate') {
      setStartDate(value);
    } else {
      setEndDate(value);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await api.get(`/transactions?customer=${selectedCustomer}&startDate=${startDate}&endDate=${endDate}`);
      setTransactions(response.data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  return (
    <div>
      <h2>Customer Performance</h2>
      <div>
        <label>Select Customer:</label>
        <select value={selectedCustomer} onChange={handleCustomerChange} required>
          <option value="">Select a customer</option>
          {customers.map((customer) => (
            <option key={customer._id} value={customer._id}>
              {customer.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Start Date:</label>
        <input type="date" name="startDate" value={startDate} onChange={handleDateChange} required />
      </div>
      <div>
        <label>End Date:</label>
        <input type="date" name="endDate" value={endDate} onChange={handleDateChange} required />
      </div>
      <button onClick={handleSearch}>Search</button>
      <div>
        <h3>Transaction Summaries</h3>
        {transactions.length > 0 ? (
          <ul>
            {transactions.map((transaction) => (
              <li key={transaction._id}>
                <p>Invoice Number: {transaction.invoiceNumber}</p>
                <p>Date: {transaction.date}</p>
                <p>Status: {transaction.status}</p>
                <p>Total Amount: {transaction.totalAmount}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No transactions found for the selected customer and date range.</p>
        )}
      </div>
    </div>
  );
}

export default CustomerPerformancePage;