// src/components/ProductListPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';

function ProductListPage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

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

  const handleAddProductClick = () => {
    navigate('/add-product');
  };

  return (
    <div>
      <h1>Product List</h1>
      <button onClick={handleAddProductClick}>Add New Product</button>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Category: {product.category}</p>
            <p>Subcategory: {product.subcategory}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Sales Price: {product.salesPrice}</p>
            <p>Cost Price: {product.costPrice}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListPage;
