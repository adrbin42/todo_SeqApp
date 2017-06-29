const express = require('express');
const router = express.Router();
const models = require('../models');

router.get("/", function (req,res){
  res.render('index');
});

router.post("/", function(req,res){
  const todotask = {
    todoitem:req.body.todoitem,
    tododesc:req.body.itemdesc
  };

  req.getValidationResult().then(function(result) {
    if (result.isEmpty()) {
      models.todo_list.create(todotask).then(function(item) {
        res.redirect("/todoitems");
      });
    } else {
      res.redirect("/index");
    }
  });
});

router.get("/todoitems", function(req, res) {
  models.todo_list.findAll().then(function(todoList) {
    res.render("todoitems", {
      todolistitems: todoList
    });
  });
});

module.exports = router;
