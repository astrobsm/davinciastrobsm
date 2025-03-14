import React, { useState } from 'react';
import InvoiceForm from './InvoiceForm';
import InvoiceReceipt from './InvoiceReceipt';

const InvoiceGeneration = ({ products = [], customers = [] }) => {
  const [invoiceData, setInvoiceData] = useState({
    customerName: '',
    customerCode: '',
    contactPerson: '',
    billingAddress: '',
    phoneNumber: '',
    email: '',
    salesDate: '',
    salesNumber: '',
    salesType: '',
    paymentTerms: '',
    productCode: '',
    productName: '',
    quantity: 0,
    unitPrice: 0,
    costPrice: 0,
    taxRate: 3.5,
    discount: 0,
    paymentMethod: '',
    paymentDate: '',
    paymentAmount: 0,
    invoiceNumber: '',
    invoiceDate: '',
    dueDate: '',
    invoiceNotes: '',
    items: [],
    totalAmount: 0,
  });

  const handleFormSubmit = (formData) => {
    const totalAmount = formData.quantity * formData.unitPrice * (1 + formData.taxRate / 100) - formData.discount;
    setInvoiceData({ ...formData, totalAmount, items: [{ name: formData.productName, quantity: formData.quantity, price: formData.unitPrice, total: totalAmount }] });
  };

  return (
    <div>
      <h2>Generate Invoice</h2>
      <InvoiceForm onSubmit={handleFormSubmit} products={products} customers={customers} />
      <InvoiceReceipt invoiceData={invoiceData} />
    </div>
  );
};

export default InvoiceGeneration;