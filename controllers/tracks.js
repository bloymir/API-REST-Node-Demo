const {tracksModel} = require('../models')
/**
 * Obtener Lista de BBDD
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
    const {body} = req
    const data = await tracksModel.create(body)
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