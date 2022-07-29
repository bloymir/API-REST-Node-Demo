const { matchedData } = require('express-validator');
const {tokenSign, verifyToken} = require('../utils/handleJwt')
const {httpHandleError, handleHttpError} = require('../utils/handleError')
const { encrypt, compare} = require('../utils/handlePassword')
const {usersModel} = require('../models')

const registerController = async (req, res) => {
    try{
        req = matchedData(req);
        const password = await encrypt(req.password)
        const body = {...req, password}
        const dataUser = await usersModel.create(body)
        dataUser.set("password", undefined, {strict:false})
        const data = {
            token: await tokenSign(dataUser),
            user: dataUser
        }
        res.send({data})
    }catch(e){
        httpHandleError(res, "ERROR_REGISTER_USER")
    }
    
}
const loginController = async (req, res) => {
    try{
        req = matchedData(req)
        const user = await usersModel.findOne({email:req.email});
        if(!user){
            handleHttpError(res, "USER_NOT_EXISTS", 404);
            return
        }

        const hashPassword = user.password;
        const check = await compare(req.password, hashPassword)
        if(!check){
            handleHttpError(res, "PASSWORD_INVALID", 401);
            return
        }

        user.set('password', undefined, {strict:false})
        const data = {
            token: await tokenSign(user),
            user
        }
        res.send({data})

    }catch(e){
        httpHandleError(res, "ERROR_LOGIN_USER")
    }
}

module.exports = {registerController, loginController}