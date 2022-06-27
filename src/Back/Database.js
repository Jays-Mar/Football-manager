
const mongoose = require('mongoose')
/*mongodb+srv://Jays:302514@basecluster.npp1vzk.mongodb.net/test */
const URI = 'mongodb://localhost:27017/Probe'


module.exports = () => {

    const connect = () => {
        // mongoose.connect(
        //     URI,
        //     {
        //       keepAlive: true,
        //       useNewUrlParser: true,
        //       useUnifiedTopology: true  
        //     },
        //     (err) => {
        //         if(err){
        //             console.log('Db erro')
        //         }else {
        //             console.log('Conexion Creada')
        //         }
        //     }
        // )
    }

    connect();
}
// mongoose.connect(URI)

// const connection = mongoose.connection;

// connection.once('open', () =>{
//     console.log('la base de datos ha sido conectada',URI)
// })