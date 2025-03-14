// server.js
const express = require('express');
const connectDB = require('./config/db');
// const cors = require('cors'); // Comment out the CORS import
const path = require('path'); // Import path module

// Import routes
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const invoiceRoutes = require('./routes/invoiceRoutes');
const reportRoutes = require('./routes/reportRoutes');

const app = express();

// Connect to the database
connectDB();

// Middleware
// app.use(cors()); // Comment out the CORS middleware
app.use(express.json());

// Custom middleware to set headers (optional, as CORS middleware handles this)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Route middleware
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes); // Removed verifyToken middleware
app.use('/api/invoices', invoiceRoutes); // Removed verifyToken middleware
app.use('/api/reports', reportRoutes); // Removed verifyToken middleware

// Serve static files from the frontend build directory
const frontendBuildPath = path.join(__dirname, '..', 'frontend', 'build');
app.use(express.static(frontendBuildPath));

// Serve the frontend index.html file for any unknown routes
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendBuildPath, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
