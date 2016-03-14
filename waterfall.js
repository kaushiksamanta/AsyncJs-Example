var async = require('async');

async.waterfall([
  function one(callback) {
    callback(null,"one executed");
  },
  function two(one,callback) {
    //console.log(one);
    callback(null,"two executed");
  }
],function(err,result) {
  console.log(result);
});
