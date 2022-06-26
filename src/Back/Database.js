
const mongoose = import('mongoose')

const URI = process.env.MONOGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost:27017'

mongoose.connect(URI)

const connection = mongoose.connection;

connection.once('open', () =>{
    console.log('la base de datos ha sido conectada',URI)
})
