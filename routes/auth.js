const express = require('express');
const {registerController,loginController } = require('../controllers/users')
const router = express.Router();
const {validatorRegister, validatorLogin} = require('../validators/auth')

router.post("/register", validatorRegister,registerController);
router.post("/login", validatorLogin,loginController);

module.exports = router;