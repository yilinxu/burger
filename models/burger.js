// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgers = {
  selectAll: function(table,cb) {
    orm.selectAll(table, function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(table, cols, vals, cb) {
    orm.insertOne(table, cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(table, objColVals, condition, cb) {
    orm.update(table, objColVals, condition, function(res) {
      cb(res);
    });
  }
  // delete:function(table, condition, cb){
  //   orm.delete("cats",condition,function(res){
  //     cb(res);
  //   })
  // }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burgers;
