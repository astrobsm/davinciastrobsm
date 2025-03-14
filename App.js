import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import Dashboard from './components/Dashboard';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import ProductIntake from './components/ProductIntake';
import InvoiceGeneration from './components/InvoiceGeneration';
import Reports from './components/Reports';
import CustomerPerformance from './components/CustomerPerformance';
import WeeklySummary from './components/WeeklySummary';
import MonthlySummary from './components/MonthlySummary';
import QuarterlySummary from './components/QuarterlySummary';
import AnnualSummary from './components/AnnualSummary';
import StockLevel from './components/StockLevel'; // Import the StockLevel component
import './global.css'; // Import the global CSS file

function App() {
  const [products, setProducts] = useState([]);
  const [sales, setSales] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="products" element={<ProductList products={products} />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="product-intake" element={<ProductIntake products={products} />} />
          <Route path="invoice" element={<InvoiceGeneration products={products} setProducts={setProducts} />} />
          <Route path="reports" element={<Reports />} />
          <Route path="customer-performance" element={<CustomerPerformance />} />
          <Route path="stock-level" element={<StockLevel products={products} sales={sales} />} /> {/* Add Stock Level route */}
        </Route>
        <Route path="/reports/weekly" element={<WeeklySummary />} />
        <Route path="/reports/monthly" element={<MonthlySummary />} />
        <Route path="/reports/quarterly" element={<QuarterlySummary />} />
        <Route path="/reports/annual" element={<AnnualSummary />} />
      </Routes>
    </Router>
  );
}

export default App;