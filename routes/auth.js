const { Router } = require('express')
const { loginController, registerController } = require('../controllers/auth')


const router = Router();

router
    .post('/register', registerController)
    .post('/login', loginController)





module.exports = router;
