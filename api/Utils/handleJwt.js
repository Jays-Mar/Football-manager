const jwt = require("jsonwebtoken");
const JWT_SECRET = "probesecrete";

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


const tokenSign = async (user) => {
  const sign = jwt.sign(
    {
      [propertiesKey.id]: user[propertiesKey.id],
      role: user.role,
    },
    JWT_SECRET,
    {
      expiresIn: "2h",
    }
  );

  return sign
};

/**
 * Debes de pasar el token de session el JWT
 * @param {*} tokenJwt 
 * @returns 
 */
const verifyToken = async (tokenJwt) => {
    try{
        return jwt.verify(tokenJwt, JWT_SECRET)
    }catch(e){
        return null
    }
};

module.exports = { tokenSign, verifyToken };