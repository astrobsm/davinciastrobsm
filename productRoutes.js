const express = require('express');
const multer = require('multer');
const productController = require('../controllers/productController');
const { authenticateJWT } = require('../config/auth');
const verifyToken = require('../middleware/authMiddleware');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Routes for product operations
router.get('/', authenticateJWT, productController.getProducts);
router.get('/:id', authenticateJWT, productController.getProductById);
router.post('/', verifyToken, upload.single('productImage'), productController.addProduct);
router.put('/:id', authenticateJWT, productController.updateProduct);
router.delete('/:id', authenticateJWT, productController.deleteProduct);

// Route for product intake
router.post('/intake', verifyToken, upload.single('productImage'), productController.addProductIntake);

module.exports = router;
