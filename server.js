var express = require("express");


var app = express();
var PORT = process.env.PORT || 8080;


var db = require("./data/friends.js");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


require("./routes/apiRoutes.js")(app);


db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});