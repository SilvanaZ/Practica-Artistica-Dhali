const { check } = require('express-validator')

module.exports = [
check('name')
.notEmpty()
.withMessage('El campo nombre es obligatorio').bail()
.isLength({ min: 4, max: 50})
.withMessage('El nombre tiene que tener entre 4 y 50 caracteres')
.isAlphanumeric('Ingresa un nombre válido'),

check('category')
.notEmpty()
.withMessage('Debes elegir la categoria'),

check('subcategory')
.notEmpty()
.withMessage('Debes elegir la categoria'),

check('price')
.notEmpty()
.withMessage('Debes ingresar un precio').bail()
.isNumeric()
.withMessage('Sólo números'),

check('discount')
.isNumeric()
.withMessage('Sólo números'),

check('description')
.isLength({ max: 5000})
.withMessage('El nombre tiene que tener entre 4 y 5000 caracteres')
.isAlphanumeric('Ingresa un nombre válido'),
]