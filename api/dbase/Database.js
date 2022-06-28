
const mongoose = require('mongoose')

// mongodb://localhost:27017/Prueba
const URI = ''


module.exports = () => {

    const connect = () => {
        mongoose.connect(
            URI,
            {
              keepAlive: true,
              useNewUrlParser: true,
              useUnifiedTopology: true  
            },
            (err) => {
                if(err){
                    console.log('Db erro')
                }else {
                    console.log('Conexion Creada')
                }
            }
        )
    }

    connect();
}
// mongoose.connect(URI)

// const connection = mongoose.connection;

// connection.once('open', () =>{
//     console.log('la base de datos ha sido conectada',URI)
// })