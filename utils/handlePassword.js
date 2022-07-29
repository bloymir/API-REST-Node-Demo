const bycrypt = require('bcryptjs');


/**
 * Contraseña sin encriptar
 * @param {*} passwordPlain 
 */
const encrypt = async(passwordPlain) => {
    return await bycrypt.hash(passwordPlain, 10)
}

/**
 * Pasar Contraseña sin encriptar y pasar contraseña encriptada
 * @param {*} passwordPlain 
 * @param {*} hashPassword 
 */
const compare = async(passwordPlain, hashPassword) => {
    return await bycrypt.compare(passwordPlain, hashPassword)
}

module.exports = { encrypt, compare}