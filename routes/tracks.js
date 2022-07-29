const express = require('express');
const router = express.Router();
const authMiddleware = require('../Middleware/session')
const checkRol = require('../Middleware/rol')
const {validatorCreateItem,validatorGetItem} = require('../validators/tracks')
const {getItems, getItem, createItem, udpdateItem, deleteItem} = require('../controllers/tracks')

router.get("/", authMiddleware, getItems)

router.get("/:id", validatorGetItem, getItem)

router.post("/",authMiddleware, checkRol(["admin"]), validatorCreateItem, createItem)

router.put("/:id", authMiddleware,checkRol(["admin"]), validatorGetItem, validatorCreateItem, udpdateItem)

router.delete("/:id", authMiddleware, validatorGetItem, deleteItem)





module.exports = router;