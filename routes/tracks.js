const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    const data = ["Hola", "mundo"]
    res.send({data})
})

module.exports = router