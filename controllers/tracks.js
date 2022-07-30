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
        const user = req.user
        const data = await tracksModel.findAllData({})
        //res.send({data, user})
        res.send({data})
    }catch(e){
        handleHttpError(res, "ERROR_GET_ITEMS")
    } 
};

/**
 * Obtener un Detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res) => {
    try{
        req = matchedData(req)
        const {id} = req
        const data = await tracksModel.findOneData(id)
        res.send({data})
    }catch(e){
        handleHttpError(res, "ERROR_GET_ITEM")
    }
};

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
const udpdateItem = async (req, res) => {
    try{
        const {id, ...body} = matchedData(req)
        const data = await tracksModel.findOneAndUpdate(
            id, body
        )
        res.send({data})
    }catch(e){
        handleHttpError(res, "ERROR_UPDATE_ITEM")
    }  
};

/**
 * Eliminar un Registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req, res) => {
    try{
        req = matchedData(req)
        const {id} = req
        const data = await tracksModel.delete({_id:id})
        res.send({data})
    }catch(e){
        console.log(e)
        handleHttpError(res, "ERROR_DELETE_ITEM")
    }  
};

module.exports = {getItems, getItem, createItem, udpdateItem, deleteItem};