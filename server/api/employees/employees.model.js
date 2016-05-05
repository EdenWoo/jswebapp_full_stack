'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var employeeschema = new mongoose.Schema({
  name: String,
  address: String,
  phone: Boolean
});

export default mongoose.model('Employees', employeeschema);
