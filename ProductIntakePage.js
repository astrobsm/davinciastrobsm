import React, { useState } from 'react';
import ProductIntakeForm from './ProductIntakeForm';

function ProductIntakePage() {
  const [showForm, setShowForm] = useState(false);

  const handleAddIntakeClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (intake) => {
    // Handle form submission, e.g., send intake data to the backend
    console.log('Product intake submitted:', intake);
    setShowForm(false);
  };

  return (
    <div>
      <h1>Product Intake</h1>
      <button onClick={handleAddIntakeClick}>Add Product Intake</button>
      {showForm && <ProductIntakeForm onSubmit={handleFormSubmit} />}
      {/* Render the list of product intakes here */}
    </div>
  );
}

export default ProductIntakePage;
