'use strict';


//create models 
var mongoose = require('mongoose');
var Cat = require('./cat.model');



//find all cats in the DB
export function getAll(req, res) {
  Cat.findAsync()
    .then(function(cats){
    	return res.status(200).json(cats);
    })
    .catch(function(err){
		return res.status(500).send(err);
    });
}

//find all cats in the DB
export function getById(req, res) {
  Cat.findByIdAsync(req.params.id)
    .then(function(cat){
    	if (!cat) {
    		res.status(404).end();
    		return null;
    	}
    	return cat;
    })
    .then(function(cat){
    	if (cat) {
    		return res.status(200).json(cat);
    	}
    })
    .catch(function(err){
		return res.status(500).send(err);
    });
}

// Creates a new cat in the DB
export function create(req, res) {
  Cat.createAsync(req.body)
    .then(function(cat){
    	return res.status(200).json(cat);
    })
    .catch(function(err){
		return res.status(500);
    });
}

// Delete a new cat in the DB
export function deleteCat(req, res) {
  Cat.findOneAndRemoveAsync(req.params.id)
    .then(function(){
    	return res.status(204).end();
    })
    .catch(function(err){
		return res.status(500).send(err);
    });
}

// update a new cat in the DB
export function update(req, res) {
	if(req.body._id){
		delete req.body._id;
	}
   Cat.findOneAndUpdateAsync(req.params.id,req.body,{new:true})
    .then(function(cat){
    	return res.status(200).json(cat);
    })
    .catch(function(err){
		return res.status(500).send(err);
    });
}




