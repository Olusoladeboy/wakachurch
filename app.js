let express = require("express"),
    app     = express(),
    ejs     = require("ejs");

app.set("view engine", "ejs");
app.use(express.static("public"));

//landing page route
app.get("/", function(req, res){
    res.render("index");
});


// Server Starter
app.listen(5000, function(){
    console.log("App Is Running on localhost:5000");
});