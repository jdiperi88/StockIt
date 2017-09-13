const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Define our model
const userSchema = new Schema({
    firstname: String,
    lastname: String,
    // validations wrapped in object
    username: { type: String, unqiue: true, lowercase: true },
    email: { type: String, unqiue: true, lowercase: true },
    password: String,
});

// Create the model class
const ModelClass = mongoose.model('user', userSchema);

//Export the model

module.exports = ModelClass;