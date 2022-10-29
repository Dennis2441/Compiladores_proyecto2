var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  let arr =[ {name:"hola1"}, {name:"hola2"}, {name:"hola3"}, {name:"hola4"}];
  res.json(arr);
});
let port = process.env.PORT;
if(port == null || port == "") {
 port = 5000;
}
app.listen(port, function() {
 console.log("Server started successfully");
});