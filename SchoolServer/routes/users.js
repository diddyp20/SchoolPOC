
var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('school', ['users']);

//get all users
router.get('/users', function(req, res, next){
    db.users.find(function(err, games){
        if(err){
            res.send(err);
        }
        res.json(games);
    });
});

//get one user
router.get('/user/:ids', function(req, res, next){
    db.users.findOne({_id: mongojs.ObjectID(req.params.ids)},function(err, game){
        if(err){
            res.send(err);
        }
        res.json(game);
    });
});

//get a user by username
router.get('/username/:username', function(req, res, next){
    db.users.find({username: req.params.username},function(err, game){
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
    var user = req.body;
    var updUser = {};

    if(user.username){
        updUser.username = user.username;
        updUser.firstName = user.firstName;
        updUser.lastName = user.lastName;
        updUser.role = user.role;
        updUser.password = user.password;
        updUser.isAdmin = user.isAdmin;
        updUser.dob = user.dob;
        updUser.pob = user.pob;
        updUser.telephone = user.telophone;
        updUser.email = user.email;
        updUser.emerName = user.emerName;
        updUser.emerPhone = user.emerPhone;
        updUser.town = user.town;
        updUser.city = user.city;
        updUser.salary = user.salary;
        updUser.loginCount = user.loginCount;
        updUser.classAssigned = user.classAssigned;
    }

    if(!updUser){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.users.update({_id: mongojs.ObjectID(req.params.id)},updUser, {},  function(err, user){
            if(err){
                res.send(err);
            }
            console.log('User correctly updated');
            res.json(user);
        });

    }
   
});

module.exports = router;