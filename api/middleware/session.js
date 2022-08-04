const { handleHttpError } = require("../utils/handleError");
const { verifyToken } = require("../utils/handleJwt")
const {modelo} = require("../modelo/users")


const propertiesKey = () => {
    const data = {
        nosql:{
            id:'_id'
        },
        mysql:{
            id:'id'
        }
    }
    return data[ENGINE_DB]
}

const authMiddleware = async (req, res, next) => {
  try {

    if(!req.headers.authorization){
        handleHttpError(res, "NEED_SESSION", 401);
        return
    }

    const token = req.headers.authorization.split(' ').pop();
    const dataToken = await verifyToken(token);

    if(!dataToken){
        handleHttpError(res, "NOT_PAYLOAD_DATA", 401);
        return
    }

    const query = {
      [propertiesKey.id]:dataToken[propertiesKey.id]
    }

    const user = await modelo.findOne(query)
    req.user = user

    next()
    

  } catch (e) {
    handleHttpError(res, "NOT_SESSION", 401);
  }
};

module.exports = authMiddleware;