const router = require('express').Router();
let Users = require('../data/models/Users');

router.route('/').get((req, res) => {

    //finding all data
    Users.find()
        .then(Users => res.json(Users))
        .catch(err => res.status(400).json('Error ' + err))
});



router.route('/add').post((req, res) => {

    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const PreferredName = req.body.PreferredName;
    const Age = req.body.Age;
    const DOB = req.body.DOB;


    
    const newUser = new Users({
        FirstName,
        LastName,
        PreferredName,
        Age,
        DOB,
    })

    console.log(newUser);
    newUser.save()
    .then(() => res.json('User Added added ' + req.body))
    .catch(err => res.status(400).json('Error: ' + err));

})

router.route('/:id').delete((req, res) => {
    Users.findByIdAndDelete(req.params.id)
    .then(() => res.json('users deleted'))
    .catch(err => res.status(400).json('ErrorL ' + err));
})



module.exports = router;
