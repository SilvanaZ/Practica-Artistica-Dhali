let {check} = require('express-validator');
const { users } = require('../database/dataBase')

module.exports=[
    check('email')
    .isEmail()
    .notEmpty()
    .withMessage('Debes ingresar un emil válido'),
    
    check('pass')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña'),
    
    body('custom')
    .custom(value {req}) => {
        let user = users.find(user => user.email === req.body.email),
        if(user){
        this.if(user.pass === req.body.pass)
        return true
        }else{
            return false
        }
    }
]