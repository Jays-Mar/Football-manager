const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/', {
    dbName: 'Pruebanodemon',
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => err ? console.log(err) : 
    console.log('Connected to yourDB-name database'));

// Schema for users of app
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
const User = mongoose.model('users', UserSchema);
User.createIndexes();