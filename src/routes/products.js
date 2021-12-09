let express = require('express')
let router = express.Router()
let controller = require('../controllers/productsController')

/* GET - Product Detail */
router.get('/detail/:id', controller.detail)

/* GET - List of product (Subcategories) */
router.get('/subcategory/:subcategory', controller.subcategory)


module.exports = router