var express = require ('express');
var router = express.Router ();
var Pokemon = require ('../db.json');
var request = require ('request');



router.get('/', function(req, res, next) {
    res.render('create', {message: false});
});

router.post('/', function (req, res, next){
    // test if data is coming through

    // set a new dynamic id
    var id = Pokemon.pokemon.length


    // make a post request to our database
    request({
        url: 'http://localhost:3000/pokemon',
        method: 'POST',
        form: {
            id: id,
            name: req.body.name,
            image: req.body.image_url,
        }

    }, function (error, response, body){
        // console.log(body);
        // send a response message
        res.render.apply('create', {message: "successfully added"});
    })
})

module.export = router()