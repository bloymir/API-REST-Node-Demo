const express = require('express');
const router = express.Router();
const authMiddleware = require('../Middleware/session')
const {validatorCreateItem,validatorGetItem} = require('../validators/tracks')
const {getItems, getItem, createItem, udpdateItem, deleteItem} = require('../controllers/tracks')

router.get("/", authMiddleware, getItems)

router.get("/:id", validatorGetItem, getItem)

router.post("/",validatorCreateItem, createItem)

router.put("/:id", validatorGetItem, validatorCreateItem, udpdateItem)

router.delete("/:id", validatorGetItem, deleteItem)





module.exports = router;