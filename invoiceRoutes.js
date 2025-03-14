const express = require('express');
const invoiceController = require('../controllers/invoiceController');
const verifyToken = require('../middleware/authMiddleware');

const router = express.Router();

// Routes for invoice operations
router.get('/', authenticateJWT, invoiceController.getInvoices);
router.get('/:id', authenticateJWT, invoiceController.getInvoiceById);
router.post('/', verifyToken, invoiceController.addInvoice);

module.exports = router;
