const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();


//GET e POST no endpoint /api/user
router.route('/user')
    .get(function(req, res){ 
        userController.CRUD.find(function(err, users){
            if(!err){               
                res.status(200).json(users); 
            }else{
                res.status(500).json(err);
            }
        });              
    })
    .post(function(req, res){
         userController.CRUD.create(req.body, function(err){
            if(!err){               
                res.status(200).json({sucess:true});

            }else{                
                res.status(500).json(err);                
            }
        });
    });


//GET, PUT e DELETE no endpoint /api/user/:id
router.route('/user/:id')
    .get(function(req, res){
        userController.CRUD.findId(req.params.id, function(err, user){
            if(!err){               
                res.status(200).json(user); 
            }else{                
                res.status(500).json(err);                
            }
        });
    })
    .put(function(req, res){
         userController.CRUD.update(req.params.id, req.body, function(err){
            if(!err){               
                res.status(200).json({sucess:true}); 
            }else{                
                res.status(500).json(err);                
            }
         });
        
    })
    .delete(function(req, res){
        userController.CRUD.remove(req.params.id, function(err){
            if(!err){               
                res.status(200).json({sucess:true}); 
            }else{                
                res.status(500).json(err);                
            }
        });
    });

module.exports = router;