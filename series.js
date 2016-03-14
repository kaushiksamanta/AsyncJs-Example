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
