
const mongoose = require('mongoose')

const URI = 'mongodb+srv://<username>:<password>@basecluster.npp1vzk.mongodb.net/?retryWrites=true&w=majority'


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
