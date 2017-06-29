const path = require('path');
const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const morgan = require("morgan");
const routes = require("./routes/router");

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache')
app.use('/public', express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(expressValidator());
app.use(morgan('dev'));
app.use(routes);

// app.get("/",function(req,res){
//   console.log("Everything works");
//   res.render("index");
// });

app.listen(3100, function () {
    console.log('Express running on http://localhost:3100/.')
});
