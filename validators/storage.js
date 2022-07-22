const {check} = require('express-validator')
const validateResult = require('../utils/handleValidator')

const validatorGetItem = [
    check("id")
        .exists()
        .isMongoId()
        .notEmpty(),   
        (req, res, next) => validateResult(req,res,next)
];

module.exports = {validatorGetItem}