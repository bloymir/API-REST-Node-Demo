const express = require('express');
const router = express.Router();
const {validatorCreateItem} = require('../validators/tracks')
const {getItems, getItem, createItem, udpdateItem, deleteItem} = require('../controllers/tracks')

router.get("/", getItems)

router.post("/",validatorCreateItem, createItem)

module.exports = router;