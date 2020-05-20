const router = require('express').Router();
let Coronavirus = require('../data/models/Coronavirus');
const fetch = require('node-fetch');



router.route('/').get( async (req, res) => {
    
    var url = 'https://api.covid19api.com/summary';
     
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        res.send({ data });
    })
    .catch(err => {
        res.send(err);
    });

});
    
module.exports = router;