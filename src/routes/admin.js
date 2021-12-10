let express = require('express');
let router = express.Router();
let controller = require('../controllers/adminController');
let upload = require('../middlewares/')

/* GET - Show products list */
router.get('/', controller.index)

/* GET - Show products list */
router.get('/products', controller.products)

/* GET - Show product create form */
router.get('/product/create', controller.create)
/* POST - Create new product */
router.post('/product/store', controller.store)

/* GET - Show product edit form */
router.get('/product/edit/:id', controller.edit)
/* PUT - Update a product */
router.put('/product/edit/:id', controller.update)

/* DELETE - Delete one product */
router.delete('/product/delete/:id', controller.destroy)


module.exports = router

