let express = ('express');
let router = express.Router();
let controller = require('../controllers/ussetsController');

router.get('/login', controller.login)

router.hget('/register', controller.register)

module.exports = router