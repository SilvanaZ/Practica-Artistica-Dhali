let {check} = require('express-validator');


module.exports=[
    check('email')
    .isEmail()
    .notEmpty()
    .withMessage('Debes ingresar un emil válido'),
    
    check('pass')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña')
]