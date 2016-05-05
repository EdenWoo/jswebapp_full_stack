'use strict';

var express = require('express');
var router = express.Router();
var controller=require('./cat.controller');

//use callback 
//if hit the url api/cat, excute the function
router.post('/', controller.create);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.delete('/:id', controller.deleteCat);
router.put('/:id',controller.update);

module.exports = router;