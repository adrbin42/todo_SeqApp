const express = require('express');
const router = express.Router();
const model = require('../models/todo_list.js');

router.get('/', function (req,res){
  res.render('index');
});

const getToDoItems = function(req, res, next) {
  models.todo_list.findById(req.params.todoitemid).then(function(item) {
    if (item) {
      req.item = item;
      next();
    } else {
      res.status(404).send("Not Found");
    }
  });
}

router.get("/todoitems", function(req, res) {
  models.todo_list.findAll().then(function(item) {
    res.render("todoitems", {
      
    });
  });
});

router.post(/todoitems, function(req,res){
  let todoitem = req.body.todoitem,
      tododesc =req.body.itemdesc;

  const todoitem = {
    todoitem = req.body.todoitem,
    tododesc = req.body.itemdesc
  };

  req.getValidationResult().then(function(result) {
    if (result.isEmpty()) {
      models.todo_list.create(todoitem).then(function(item) {
        res.redirect("/todoitems");
      });
    } else {
      res.redirect("/index");
    }
  });


});

router.post("/todoitems/:todoitemid/delete", getStudent, function(req, res) {
  req.student.destroy().then(function() {
    res.redirect("/");
  });
});



module.exports = router;
