const path = require('path');
const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const morgan = require("morgan");
const routes = require("./routes");

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache')
app.use('/static', express.static('static'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(expressValidator());
app.use(morgan('dev'))

app.use(routes);

app.get("/",function(req,res){
  console.log("Everything works");
  res.render("Page works");
});

app.listen(3000, function () {
    console.log('Express running on http://localhost:3000/.')
});
