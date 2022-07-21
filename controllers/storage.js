const {storageModel} = require('../models')
const PUBLIC_URL = process.env.PUBLIC_URL


/** Obtener Lista de BBDD
* @param {*} req 
* @param {*} res 
*/
const getItems = async (req, res) => {
   const data = await tracksModel.find({})

   res.send({data})
};

/**
* Obtener un Detalle
* @param {*} req 
* @param {*} res 
*/
const getItem = (req, res) => {};

/**
* Crar un Registro
* @param {*} req 
* @param {*} res 
*/
const createItem = async (req, res) => {
   const {body, file} = req
   const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
   console.log({fileData})
   const data = await storageModel.create(fileData)
   res.send({data})
};

/**
* Actualizar un registro
* @param {*} req 
* @param {*} res 
*/
const udpdateItem = (req, res) => {};

/**
* Eliminar un Registro
* @param {*} req 
* @param {*} res 
*/
const deleteItem = (req, res) => {};

module.exports = {getItems, getItem, createItem, udpdateItem, deleteItem};