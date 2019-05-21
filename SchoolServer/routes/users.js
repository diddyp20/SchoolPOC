
var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('school', ['users']);

//get all users
router.get('/', function(req, res, next){
    db.users.find(function(err, games){
        if(err){
            res.send(err);
        }
        res.json(games);
    });
});

//get one user
router.get('/:id', function(req, res, next){
    db.users.findOne({_id: mongojs.ObjectID(req.params.id)},function(err, game){
        if(err){
            res.send(err);
        }
        res.json(game);
    });
});

//save user
router.post('/user', function(req, res, next){
    var game = req.body;
    if(!game.username){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {
        db.users.save(game, function(err, game){
            if(err){
                res.send(err);
            }
            res.json(game);

        });
    }

});

//Delete user
router.delete('/user/:id', function(req, res, next){
    db.users.remove({_id: mongojs.ObjectID(req.params.id)},function(err, game){
        if(err){
            res.send(err);
        }
        res.json(game);
    });
});

//update user
//firstName":"John","lastName":"Doe","roleID":"","username":"jonh1","password":"school"
router.put('/user/:id', function(req, res, next){
    var game = req.body;
    var updGame = {};
    if(game.username){
        updGame.username = game.username;
        updGame.firstName = game.firstName;
        updGame.lastName = game.lastName;
        updGame.roleID = game.roleID;
        updGame.password = game.password;
    }

    if(!updGame){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.users.update({_id: mongojs.ObjectID(req.params.id)},updGame, {},  function(err, game){
            if(err){
                res.send(err);
            }
            res.json(game);
        });

    }
   
});
module.exports = router;