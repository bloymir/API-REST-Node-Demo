
const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../utils/handleStorage')


router.post("/", uploadMiddleware.single("myfile"), (req, res) => {
    res.send({a:1})
})

module.exports = router