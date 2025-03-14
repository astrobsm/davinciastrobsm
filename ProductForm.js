import React, { useState } from 'react';

function ProductForm({ onSubmit }) {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    code: '',
    category: '',
    subcategory: '',
    quantity: '',
    unitOfMeasure: '',
    reorderPoint: '',
    reorderQuantity: '',
    salesPrice: '',
    costPrice: '',
    taxRate: '',
    supplierName: '',
    supplierCode: '',
    leadTime: '',
    productImage: '',
    productSpecifications: '',
    warrantyInformation: '',
    serialNumberTracking: false,
    lotNumberTracking: false,
    barcode: '',
    hsnCode: '',
    customFields: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct({
      ...product,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(product);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Product</h2>
      <div>
        <label>Product Name:</label>
        <input type="text" name="name" value={product.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Product Description:</label>
        <textarea name="description" value={product.description} onChange={handleChange} required />
      </div>
      <div>
        <label>Product Code:</label>
        <input type="text" name="code" value={product.code} onChange={handleChange} required />
      </div>
      <div>
        <label>Category:</label>
        <input type="text" name="category" value={product.category} onChange={handleChange} required />
      </div>
      <div>
        <label>Subcategory:</label>
        <input type="text" name="subcategory" value={product.subcategory} onChange={handleChange} required />
      </div>
      <div>
        <label>Quantity:</label>
        <input type="number" name="quantity" value={product.quantity} onChange={handleChange} required />
      </div>
      <div>
        <label>Unit of Measure:</label>
        <input type="text" name="unitOfMeasure" value={product.unitOfMeasure} onChange={handleChange} required />
      </div>
      <div>
        <label>Reorder Point:</label>
        <input type="number" name="reorderPoint" value={product.reorderPoint} onChange={handleChange} required />
      </div>
      <div>
        <label>Reorder Quantity:</label>
        <input type="number" name="reorderQuantity" value={product.reorderQuantity} onChange={handleChange} required />
      </div>
      <div>
        <label>Sales Price:</label>
        <input type="number" name="salesPrice" value={product.salesPrice} onChange={handleChange} required />
      </div>
      <div>
        <label>Cost Price:</label>
        <input type="number" name="costPrice" value={product.costPrice} onChange={handleChange} required />
      </div>
      <div>
        <label>Tax Rate:</label>
        <input type="number" name="taxRate" value={product.taxRate} onChange={handleChange} required />
      </div>
      <div>
        <label>Supplier Name:</label>
        <input type="text" name="supplierName" value={product.supplierName} onChange={handleChange} required />
      </div>
      <div>
        <label>Supplier Code:</label>
        <input type="text" name="supplierCode" value={product.supplierCode} onChange={handleChange} />
      </div>
      <div>
        <label>Lead Time:</label>
        <input type="number" name="leadTime" value={product.leadTime} onChange={handleChange} required />
      </div>
      <div>
        <label>Product Image:</label>
        <input type="file" name="productImage" onChange={handleChange} />
      </div>
      <div>
        <label>Product Specifications:</label>
        <textarea name="productSpecifications" value={product.productSpecifications} onChange={handleChange} />
      </div>
      <div>
        <label>Warranty Information:</label>
        <textarea name="warrantyInformation" value={product.warrantyInformation} onChange={handleChange} />
      </div>
      <div>
        <label>Serial Number Tracking:</label>
        <input type="checkbox" name="serialNumberTracking" checked={product.serialNumberTracking} onChange={handleChange} />
      </div>
      <div>
        <label>Lot Number Tracking:</label>
        <input type="checkbox" name="lotNumberTracking" checked={product.lotNumberTracking} onChange={handleChange} />
      </div>
      <div>
        <label>Barcode:</label>
        <input type="text" name="barcode" value={product.barcode} onChange={handleChange} />
      </div>
      <div>
        <label>HSN Code:</label>
        <input type="text" name="hsnCode" value={product.hsnCode} onChange={handleChange} />
      </div>
      <div>
        <label>Custom Fields:</label>
        <textarea name="customFields" value={product.customFields} onChange={handleChange} />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;