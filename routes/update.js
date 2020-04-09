var express = require ('express');
var router = express.Router ();
var Pokemon = require ('../db.json');
var request = require('request');

router.get('/:pokeId', function(req, res, next) {
    request({
        url:'http//',
        method: 'GET'  
    })
})