import React, { useState, useEffect } from 'react';
import './InvoiceForm.css'; // Import the CSS file for styling

const InvoiceForm = ({ onSubmit, products = [], customers = [] }) => {
  const [formData, setFormData] = useState({
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

  const [isNewCustomer, setIsNewCustomer] = useState(false);

  useEffect(() => {
    // Auto-generate invoice number
    setFormData((prevData) => ({
      ...prevData,
      invoiceNumber: `INV-${Date.now()}`,
    }));
  }, []);

  const handleCustomerChange = (e) => {
    const customerName = e.target.value;
    const customer = customers.find((c) => c.name === customerName);
    if (customer) {
      setFormData({
        ...formData,
        customerName: customer.name,
        customerCode: customer.code,
        contactPerson: customer.contactPerson,
        billingAddress: customer.billingAddress,
        phoneNumber: customer.phoneNumber,
        email: customer.email,
      });
      setIsNewCustomer(false);
    } else {
      setFormData({
        ...formData,
        customerName,
        customerCode: `CUST-${Date.now()}`,
        contactPerson: '',
        billingAddress: '',
        phoneNumber: '',
        email: '',
      });
      setIsNewCustomer(true);
    }
  };

  const handleProductChange = (e) => {
    const productCode = e.target.value;
    const product = products.find((p) => p.code === productCode);
    if (product) {
      setFormData({
        ...formData,
        productCode: product.code,
        productName: product.name,
        unitPrice: product.salesPrice,
        costPrice: product.costPrice,
      });
    }
  };

  const handleQuantityChange = (e) => {
    const quantity = e.target.value;
    const totalPrice = quantity * formData.unitPrice;
    const taxAmount = (formData.unitPrice - formData.costPrice) * quantity * (formData.taxRate / 100);
    const discountAmount = totalPrice * 0.01;
    const totalAmount = totalPrice + taxAmount - discountAmount;
    setFormData({
      ...formData,
      quantity,
      totalAmount,
      items: [{ name: formData.productName, quantity, price: formData.unitPrice, total: totalPrice }],
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="invoice-form">
      <h2>Customer Information</h2>
      <select name="customerName" onChange={handleCustomerChange}>
        <option value="">Select Customer</option>
        {customers.map((customer) => (
          <option key={customer.code} value={customer.name}>
            {customer.name}
          </option>
        ))}
        <option value="new">Add New Customer</option>
      </select>
      {isNewCustomer && (
        <>
          <input type="text" name="customerName" placeholder="Customer Name" value={formData.customerName} onChange={handleChange} />
          <input type="text" name="customerCode" placeholder="Customer Code" value={formData.customerCode} readOnly />
          <input type="text" name="contactPerson" placeholder="Contact Person" value={formData.contactPerson} onChange={handleChange} />
          <input type="text" name="billingAddress" placeholder="Billing Address" value={formData.billingAddress} onChange={handleChange} />
          <input type="text" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        </>
      )}

      <h2>Sales Information</h2>
      <input type="date" name="salesDate" placeholder="Sales Date" onChange={handleChange} />
      <input type="text" name="salesNumber" placeholder="Sales Number" onChange={handleChange} />
      <input type="text" name="salesType" placeholder="Sales Type" onChange={handleChange} />
      <input type="text" name="paymentTerms" placeholder="Payment Terms" onChange={handleChange} />

      <h2>Product Information</h2>
      <select name="productCode" onChange={handleProductChange}>
        <option value="">Select Product</option>
        {products.map((product) => (
          <option key={product.code} value={product.code}>
            {product.name}
          </option>
        ))}
      </select>
      <input type="text" name="productName" placeholder="Product Name" value={formData.productName} readOnly />
      <input type="number" name="quantity" placeholder="Quantity" onChange={handleQuantityChange} />
      <input type="number" name="unitPrice" placeholder="Unit Price" value={formData.unitPrice} readOnly />

      <h2>Tax and Discount Information</h2>
      <input type="number" name="taxRate" placeholder="Tax Rate" value={formData.taxRate} readOnly />
      <input type="number" name="discount" placeholder="Discount" value={formData.totalAmount * 0.01} readOnly />

      <h2>Payment Information</h2>
      <select name="paymentMethod" onChange={handleChange}>
        <option value="">Select Payment Method</option>
        <option value="Cash">Cash</option>
        <option value="Check">Check</option>
        <option value="Bank Transfer">Bank Transfer</option>
      </select>
      <input type="date" name="paymentDate" placeholder="Payment Date" onChange={handleChange} />
      <input type="number" name="paymentAmount" placeholder="Payment Amount" onChange={handleChange} />

      <h2>Invoice Information</h2>
      <input type="text" name="invoiceNumber" placeholder="Invoice Number" value={formData.invoiceNumber} readOnly />
      <input type="date" name="invoiceDate" placeholder="Invoice Date" onChange={handleChange} />
      <input type="date" name="dueDate" placeholder="Due Date" onChange={handleChange} />
      <textarea name="invoiceNotes" placeholder="Invoice Notes" onChange={handleChange}></textarea>

      <button type="submit">Generate Invoice</button>
    </form>
  );
};

export default InvoiceForm;