import React, { useState } from 'react';
import InvoiceForm from './InvoiceForm';

function InvoiceGenerationPage() {
  const [showForm, setShowForm] = useState(false);

  const handleGenerateInvoiceClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (invoice) => {
    // Handle form submission, e.g., send invoice data to the backend
    console.log('Invoice generated:', invoice);
    setShowForm(false);
  };

  return (
    <div>
      <h1>Invoice Generation</h1>
      <button onClick={handleGenerateInvoiceClick}>Generate Invoice</button>
      {showForm && <InvoiceForm onSubmit={handleFormSubmit} />}
      {/* Render the list of invoices here */}
    </div>
  );
}

export default InvoiceGenerationPage;
