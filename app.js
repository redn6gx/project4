const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//faker module
var faker = require('faker');
var randomPhone = faker.phone.phoneNumber();
console.log(randomPhone);

//passing randomPhone variable to index.html in views
app.get("/", function(req, res) {
    res.render("index.html", {phone: randomPhone});
});

//routes
app.get("/", function(req, res) {
    res.render("index.html");
});

app.get("/machineLearning", function(req, res) {
    res.render("machineLearning.html");
});

app.get("/deepLearning", function(req, res) {
    res.render("deepLearning.html");
});

app.get("/applications", function(req, res) {
    res.render("applications.html");
});

app.get("/citations", function(req, res) {
    res.render("citations.html");
});

//server listener
// app.listen("8081", "127.0.0.1", function() {
//     console.log("Express Server is Running...");
// });

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express Server is Running...");
});