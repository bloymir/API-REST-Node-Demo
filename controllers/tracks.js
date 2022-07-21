const { matchedData } = require('express-validator');
const {tracksModel} = require('../models')
const {handleHttpError} = require('../utils/handleError')
/**
 * Obtener Lista de BBDD
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {

    try{
        const data = await tracksModel.find({})
        res.send({data})
    }catch(e){
        handleHttpError(req, "ERROR_GET_ITEMS")
    }
    
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
    try{
        const body = matchedData(req)
        const data = await tracksModel.create(body)
        res.send({data})
    }catch(e){
        handleHttpError(res, "ERROR_CREATE_ITEM")
    }   
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