
const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../utils/handleStorage')
const {getItems, getItem, createItem, udpdateItem, deleteItem} = require('../controllers/storage')


router.post("/", uploadMiddleware.single("myfile"), createItem)

module.exports = router