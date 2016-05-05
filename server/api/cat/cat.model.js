'use strict';

//var mongoose = require('mongoose');
var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var catschema = new mongoose.Schema({
	name: String,
	age: Number,
	favoriteColor:String 
});

export default mongoose.model('Cat', catschema);
