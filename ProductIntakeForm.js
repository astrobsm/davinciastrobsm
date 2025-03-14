import React, { useState, useEffect } from 'react';
import api from '../utils/api';

function ProductIntakeForm({ onSubmit }) {
  const [products, setProducts] = useState([]);
  const [intake, setIntake] = useState({
    productId: '',
    receiptDate: '',
    receiptTime: '',
    receiptNumber: '',
    warehouseLocation: '',
    receivedQuantity: '',
    unitOfMeasure: '',
    productCondition: '',
    serialNumber: '',
    lotNumber: '',
    productImage: '',
    productSpecifications: '',
    warrantyInformation: '',
    notes: '',
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setIntake({
      ...intake,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(intake);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Product Intake</h2>
      <div>
        <label>Product Name:</label>
        <select name="productId" value={intake.productId} onChange={handleChange} required>
          <option value="">Select a product</option>
          {products.map((product) => (
            <option key={product._id} value={product._id}>
              {product.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Receipt Date:</label>
        <input type="date" name="receiptDate" value={intake.receiptDate} onChange={handleChange} required />
      </div>
      <div>
        <label>Receipt Time:</label>
        <input type="time" name="receiptTime" value={intake.receiptTime} onChange={handleChange} required />
      </div>
      <div>
        <label>Receipt Number:</label>
        <input type="text" name="receiptNumber" value={intake.receiptNumber} onChange={handleChange} required />
      </div>
      <div>
        <label>Warehouse Location:</label>
        <input type="text" name="warehouseLocation" value={intake.warehouseLocation} onChange={handleChange} required />
      </div>
      <div>
        <label>Received Quantity:</label>
        <input type="number" name="receivedQuantity" value={intake.receivedQuantity} onChange={handleChange} required />
      </div>
      <div>
        <label>Unit of Measure:</label>
        <input type="text" name="unitOfMeasure" value={intake.unitOfMeasure} onChange={handleChange} required />
      </div>
      <div>
        <label>Product Condition:</label>
        <input type="text" name="productCondition" value={intake.productCondition} onChange={handleChange} required />
      </div>
      <div>
        <label>Serial Number:</label>
        <input type="text" name="serialNumber" value={intake.serialNumber} onChange={handleChange} />
      </div>
      <div>
        <label>Lot Number:</label>
        <input type="text" name="lotNumber" value={intake.lotNumber} onChange={handleChange} />
      </div>
      <div>
        <label>Product Image:</label>
        <input type="file" name="productImage" onChange={handleChange} />
      </div>
      <div>
        <label>Product Specifications:</label>
        <textarea name="productSpecifications" value={intake.productSpecifications} onChange={handleChange} />
      </div>
      <div>
        <label>Warranty Information:</label>
        <textarea name="warrantyInformation" value={intake.warrantyInformation} onChange={handleChange} />
      </div>
      <div>
        <label>Notes:</label>
        <textarea name="notes" value={intake.notes} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ProductIntakeForm;