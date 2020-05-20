const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const coronaVirusSchema =  new Schema({
    Country: { type: String, minlength: 3},
    NewConfirmed: { type: String, minlength: 3},
    TotalConfirmed: { type: String, minlength: 3},
    NewDeaths: { type: String, minlength: 3},
    TotalDeaths: { type: String, minlength: 3},
    TotalRecovered: { type: String, minlength: 3},
}, {
    timestamps: true,
});

const Coronavirus = mongoose.model('Coronavirus', coronaVirusSchema);

module.exports = Coronavirus;