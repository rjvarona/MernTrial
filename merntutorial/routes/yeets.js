const router = require('express').Router();
let Yeet = require('../models/yeets.model');

router.route('/').get((req, res) => {
    Yeet.find()
        .then(yeets => res.json(yeets))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) =>
{
    const yeet = req.body.yeet;
    const header = req.body.header;
    const username = req.body.username;
})