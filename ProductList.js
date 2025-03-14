import React, { useState } from 'react';
import './ProductList.css'; // Add custom styles for the product list

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
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
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    setProducts([...products, newProduct]);
    setNewProduct({
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
    });
  };

  return (
    <div className="product-list">
      <h2>Product List</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name}</li>
        ))}
      </ul>
      <h2>Add New Product</h2>
      <form onSubmit={handleAddProduct}>
        <div>
          <label>Product Name:</label>
          <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Product Description:</label>
          <input type="text" name="description" value={newProduct.description} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Product Code:</label>
          <input type="text" name="code" value={newProduct.code} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Category:</label>
          <input type="text" name="category" value={newProduct.category} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Subcategory:</label>
          <input type="text" name="subcategory" value={newProduct.subcategory} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Quantity:</label>
          <input type="number" name="quantity" value={newProduct.quantity} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Unit of Measure:</label>
          <input type="text" name="unitOfMeasure" value={newProduct.unitOfMeasure} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Reorder Point:</label>
          <input type="number" name="reorderPoint" value={newProduct.reorderPoint} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Reorder Quantity:</label>
          <input type="number" name="reorderQuantity" value={newProduct.reorderQuantity} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Sales Price:</label>
          <input type="number" name="salesPrice" value={newProduct.salesPrice} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Cost Price:</label>
          <input type="number" name="costPrice" value={newProduct.costPrice} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Tax Rate:</label>
          <input type="number" name="taxRate" value={newProduct.taxRate} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Supplier Name:</label>
          <input type="text" name="supplierName" value={newProduct.supplierName} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Supplier Code:</label>
          <input type="text" name="supplierCode" value={newProduct.supplierCode} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Lead Time:</label>
          <input type="number" name="leadTime" value={newProduct.leadTime} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Product Image:</label>
          <input type="text" name="productImage" value={newProduct.productImage} onChange={handleInputChange} />
        </div>
        <div>
          <label>Product Specifications:</label>
          <input type="text" name="productSpecifications" value={newProduct.productSpecifications} onChange={handleInputChange} />
        </div>
        <div>
          <label>Warranty Information:</label>
          <input type="text" name="warrantyInformation" value={newProduct.warrantyInformation} onChange={handleInputChange} />
        </div>
        <div>
          <label>Serial Number Tracking:</label>
          <input type="checkbox" name="serialNumberTracking" checked={newProduct.serialNumberTracking} onChange={handleInputChange} />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductList;