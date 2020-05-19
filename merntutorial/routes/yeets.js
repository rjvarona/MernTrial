const router = require('express').Router();
let Yeet = require('../data/models/Yeet');

router.route('/').get((req, res) => {
    Yeet.find()
        .then(yeets => res.json(yeets))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) =>
{
    const yeets = req.body.yeets;
    const header = req.body.header;
    const username = req.body.username;
    const date = Date.parse(req.body.date);
    console.log(req.body);
    const newYeet = new Yeet({
        yeets,
        header,
        username,
        date,
    });

    newYeet.save()
        .then(() => res.json('yeet added'))
        .catch(err => res.status(400).json('Error ' + err));
});

router.route('/:id').delete((req, res) => {
    Yeet.findByIdAndDelete(req.params.id)
      .then(() => res.json('Yeet deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
    
module.exports = router;