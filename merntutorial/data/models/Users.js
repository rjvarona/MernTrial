const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const userSchema = new Schema({
    FirstName: {type: String, minlength: 2},
    LastName: {type: String, minlength: 2},
    PreferredName: {type: String, minlength: 2},
    Age: {type: Number},
    DOB: {type: Date},
},{
    timestamps: true
})


const Users = mongoose.model('Users', userSchema);


module.exports = Users;