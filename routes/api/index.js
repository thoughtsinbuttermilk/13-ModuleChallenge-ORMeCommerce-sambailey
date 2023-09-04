const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

// used to construct the endpoint
// http://127.0.0.1:3001/categories
// http://127.0.0.1:3001/products
// http://127.0.0.1:3001/tags
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
