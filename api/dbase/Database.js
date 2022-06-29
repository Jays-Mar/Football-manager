
const mongoose = require('mongoose')

// const URI = 'mongodb://localhost:27017/Football'
const URI = 'mongodb+srv://Jays:302514@basecluster.npp1vzk.mongodb.net/Base'
// const URI = "mongodb+srv://Jays:302514@basecluster.npp1vzk.mongodb.net/?retryWrites=true&w=majority";
// const URI = 'mongodb+srv://Jays:302514@basecluster.npp1vzk.mongodb.net/test'


// Jays:302514
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