const { check } = require("express-validator");
const validateResults = require("../utils/handlevalidator")

const validatorRegister = [
    check("correo")
    .exists()
    .notEmpty()
    .isLength({min:3, max:20}),
    check("usuario")
    .exists()
    .notEmpty()
    .isLength({min:3, max:20}),
    check("pass")
    .exists()
    .notEmpty()
    .isLength({min:3, max:15}),
    check("tipo")
    .exists()
    .notEmpty(),
    //.isEmail(),
    check("equipo")
    .exists()
    .notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

const validatorLogin = [
    check("correo")
    .exists()
    .notEmpty()
    .isLength({min:3, max:20}),
    check("pass")
    .exists()
    .notEmpty()
    .isLength({min:3, max:15}),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

module.exports = { validatorRegister, validatorLogin};