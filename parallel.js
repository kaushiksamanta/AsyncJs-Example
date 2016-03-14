var async = require('async');

var stack = [];

var functionOne = function (callback) {
    //perform actions
    callback(null,"First Function Result");
}

var functionTwo = function (callback) {
    //perform actions
    callback(null,"Second Function Result");
}

var functionThree = function (callback) {
    //perform actions
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
    //perform actions
    callback(null,"First Function Result");
}

stack.functionTwo = function (callback) {
    //perform actions
    callback(null,"Second Function Result");
}

stack.functionThree = function (callback) {
    //perform actions
    callback(null,"Third Function Result");
}

async.parallel(stack,function (err,result) {
  console.log(result);
});
