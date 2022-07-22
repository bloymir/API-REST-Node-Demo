
const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../utils/handleStorage')
const {validatorCreateItem,validatorGetItem} = require('../validators/storage')
const {getItems, getItem, createItem, udpdateItem, deleteItem} = require('../controllers/storage')

router.get("/", getItems)
router.get("/:id", validatorGetItem, getItem)
router.post("/", uploadMiddleware.single("myfile"), createItem)
router.delete("/:id", validatorGetItem,deleteItem)

module.exports = router