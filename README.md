# AsyncJs-Example
Simple examples to learn async js in minutes.
  - Series
  - Parallel
  - waterfall

Async js works both in frontend and backend.


# Parallel
--------------------------------------------------------------------------------------------------------------------------------------
var async = require('async');

var stack = [];

var functionOne = function (callback) 

{
    
    callback(null,"First Function Result");
    
}

var functionTwo = function (callback) 
{
    
    callback(null,"Second Function Result");
}

var functionThree = function (callback) {

    callback(null,"Third Function Result");
}


stack.push(functionOne);


stack.push(functionTwo);


stack.push(functionThree);


async.parallel(stack,function (err,result) {

  console.log(result);
  
});


var stack = {};


stack.functionOne = function (callback) {
    
    callback(null,"First Function Result");
}

stack.functionTwo = function (callback) {
   
    callback(null,"Second Function Result");
}

stack.functionThree = function (callback) {
   
    callback(null,"Third Function Result");
}

async.parallel(stack,function (err,result) {

  console.log(result);
  
});
 
------------------------------------------------------------------------------------------------------------------------------------
# Waterfall

var async = require('async');

async.waterfall([
  function one(callback) {
  
    callback(null,"one executed");
    
  },
  function two(one,callback) {
    
    callback(null,"two executed");
    
  }
],function(err,result) {

  console.log(result);
  
});

-------------------------------------------------------------------------------------------------------------------------------------

# Series

var async = require('async');

async.series([
  function one(callback) {
  
    callback(null,"one executed");
    
  },
  function two(callback) {
  
    callback(null,"two executed");
    
  },
  function three(callback) {
  
    callback(null,"three executed");
    
  }

],function(err,result) {

  console.log(result);
  
});

