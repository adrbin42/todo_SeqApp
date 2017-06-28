'use strict';
module.exports = function(sequelize, DataTypes) {
  var todo_list = sequelize.define('todo_list', {
    todoitem: DataTypes.STRING,
    tododesc: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return todo_list;
};