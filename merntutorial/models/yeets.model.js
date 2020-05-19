const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const yeetsSchema =  new Schema({
    yeets: { type: String, minlength: 3},
    header: { type: String, minlength: 3},
    username: { type: String, minlength: 3},
    date: { type: Date, minlength: 3},
}, {
    timestamps: true,
});

const Yeet = mongoose.model('Yeet', yeetsSchema);

module.exports = Yeet;