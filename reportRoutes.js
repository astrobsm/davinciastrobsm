const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');
const { authenticateJWT } = require('../config/auth');

// Route for generating reports (annual, quarterly, monthly)
router.get('/generate', authenticateJWT, reportController.generateReport);
// Route for retrieving product stock report
router.get('/stock', authenticateJWT, reportController.getProductStockReport);

module.exports = router;
