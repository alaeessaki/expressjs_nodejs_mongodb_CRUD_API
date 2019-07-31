const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');
const Test = require('../models/test');

// retrieving contacts
router.get('/contacts', (req,res, next)=>{
    Contact.find(function(err, contacts){
        res.json(contacts);
    })
})
router.get('/test', (req,res, next)=>{
    Test.find(function(err, test){
        res.json(test);
    })
})

// add contact
router.post('/contact', (req, res, next)=>{
    let newContact = new Contact({
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        phone: req.body.phone
    });

    newContact.save((err, contact)=>{
        if(err){
            res.json({msg: 'failed to add contact'});
        }
        else{
            res.json({msg: 'contact added successfully'});
        }
    })
});

// delete contacts
router.delete('/contact/:id', (req, res, next)=>{
     Contact.remove({_id: req.params.id}, function(err, result){
         if(err){
             res.json(err);
         }
         else{
             res.json(result);
         }
     })
});



module.exports = router;