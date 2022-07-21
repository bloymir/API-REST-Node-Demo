const {check} = require('express-validator')
const validateResult = require('../utils/handleValidator')

const validatorCreateItem = [
    check("name")
        .exists()
        .notEmpty(),
    check("album")
        .exists()
        .notEmpty(),
    check("cover")
        .exists()
        .notEmpty(),
    check("artist")
        .exists()
        .notEmpty(),
    check("artist.name")
        .exists()
        .notEmpty(),
    check("artist.nickname")
        .exists()
        .notEmpty(),
    check("artist.nationality")
        .exists()
        .notEmpty(),
    check("duration")
        .exists()
        .notEmpty(),
    check("duration.start")
        .exists()
        .isNumeric()
        .notEmpty(),
    check("duration.end")
        .exists()
        .isNumeric()
        .notEmpty(),
    check("mediaId")
        .exists()
        .isMongoId()
        .notEmpty(),   
        (req, res, next) => validateResult(req,res,next)
];

const validatorGetItem = [
    check("id")
        .exists()
        .isMongoId()
        .notEmpty(),   
        (req, res, next) => validateResult(req,res,next)
];

module.exports = {validatorCreateItem,validatorGetItem}