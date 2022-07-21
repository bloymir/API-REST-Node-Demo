const express = require('express');
const router = express.Router();
const {getItems, getItem, createItem, udpdateItem, deleteItem} = require('../controllers/tracks')

router.get("/", getItems)

router.post("/", createItem)

module.exports = router;