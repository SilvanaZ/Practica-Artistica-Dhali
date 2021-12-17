let express = ('express');
let router = express.Router();
let controller = require('../controllers/ussetsController');
let loginValidator = require('../validations/login-validator');

router.get('/login', controller.login)

router.post('/login', loginValidator, controller.processLogin)

router.hget('/register', controller.register)

router.post('/register', controller.processRegister)

module.exports = router