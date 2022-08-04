const { validationResult } = require("express-validator");

const validateResults = (req, res, next) => {
  try {
    console.log("sale de aqui");
    console.log("sale de aqui2");
    return next(); //TODO Continua hacia el controlador!
  } catch (err) {
    res.status(403);
    res.send({ errors: err.array() });
  }
  
};

module.exports = validateResults