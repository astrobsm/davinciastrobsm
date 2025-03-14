import React, { useState, useEffect } from 'react';
import './ProductIntake.css'; // Add custom styles for the product intake

const ProductIntake = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [intakeDetails, setIntakeDetails] = useState({
    productCode: '',

  });

  useEffect(() => {
    const product = products.find(p => p.code === selectedProduct);
    if (product) {
      setIntakeDetails({
        ...intakeDetails,
        productCode: product.code,
        productName: product.name,
        productDescription: product.description,
        productCategory: product.category,
        productSubcategory: product.subcategory,
      });
    }
  }, [selectedProduct, products]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIntakeDetails({
      ...intakeDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(intakeDetails);
    // Handle form submission logic here
  };

  return (
    <div className="product-intake">
      <h2>Product Intake</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Select Product:</label>
          <select name="selectedProduct" value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)} required>
            <option value="">Select a product</option>
            {products.map((product) => (
              <option key={product.code} value={product.code}>
                {product.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Product Code:</label>
          <input type="text" name="productCode" value={intakeDetails.productCode} readOnly />
        </div>
        <div>
          <label>Product Name:</label>
          <input type="text" name="productName" value={intakeDetails.productName} readOnly />
        </div>
        <div>
          <label>Product Description:</label>
          <input type="text" name="productDescription" value={intakeDetails.productDescription} readOnly />
        </div>
        <div>
          <label>Product Category:</label>
          <input type="text" name="productCategory" value={intakeDetails.productCategory} readOnly />
        </div>
        <div>
          <label>Product Subcategory:</label>
          <input type="text" name="productSubcategory" value={intakeDetails.productSubcategory} readOnly />
        </div>
        <div>
          <label>Supplier Name:</label>
          <input type="text" name="supplierName" value={intakeDetails.supplierName} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Supplier Code:</label>
          <input type="text" name="supplierCode" value={intakeDetails.supplierCode} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Supplier Invoice Number:</label>
          <input type="text" name="supplierInvoiceNumber" value={intakeDetails.supplierInvoiceNumber} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Supplier Invoice Date:</label>
          <input type="date" name="supplierInvoiceDate" value={intakeDetails.supplierInvoiceDate} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Receipt Date:</label>
          <input type="date" name="receiptDate" value={intakeDetails.receiptDate} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Receipt Time:</label>
          <input type="time" name="receiptTime" value={intakeDetails.receiptTime} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Receipt Number:</label>
          <input type="text" name="receiptNumber" value={intakeDetails.receiptNumber} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Warehouse Location:</label>
          <input type="text" name="warehouseLocation" value={intakeDetails.warehouseLocation} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Received Quantity:</label>
          <input type="number" name="receivedQuantity" value={intakeDetails.receivedQuantity} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Unit of Measure:</label>
          <input type="text" name="unitOfMeasure" value={intakeDetails.unitOfMeasure} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Product Condition:</label>
          <input type="text" name="productCondition" value={intakeDetails.productCondition} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Serial Number:</label>
          <input type="text" name="serialNumber" value={intakeDetails.serialNumber} onChange={handleInputChange} />
        </div>
        <div>
          <label>Lot Number:</label>
          <input type="text" name="lotNumber" value={intakeDetails.lotNumber} onChange={handleInputChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProductIntake;
