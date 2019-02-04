var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//importing mongoose
var mongoose = require('mongoose');

//connection string
var mongoDB = 'mongodb://michellelally:datarep2018@ds115592.mlab.com:15592/data-rep'

//connecting to the database
mongoose.connect(mongoDB);

//Schema
var Schema = mongoose.Schema;

//How its writing the data
var postSchema = new Schema({
    title: String,
    content: String
})

//Data Model
var PostModel = mongoose.model('posts', postSchema);

//Here we are configuring express to use body-parser as middle-ware. 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS")
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/name', function (req, res) {
    res.send("Hello you sent " +
        req.body.firstname + " " +
        req.body.lastname);
})

app.get('/', function (req, res) {
    res.send('Hello from Express');
})

app.post('/api/posts', function (req, res) {
    console.log("post successful");
    console.log(req.body.title);
    console.log(req.body.content);

    PostModel.create({
        title: req.body.title,
        content: req.body.content
    }, function (err, data) {
        if (err)
            res.send(err);
        res.json(data);//send back 
    })

});

app.get('/api/posts', function (req, res) {
    PostModel.find(function (err, data) {
        if (err)
            res.send(err);
        res.json(data);//send back 
        //res.send("Post added successfully")
    })
})

app.delete('/api/posts/:id', function (req, res) {
    console.log(req.params.id);
    PostModel.deleteOne({ _id: req.params.id },
        function (err, data) {
            if (err)
                res.send(err);
            res.json(data);//send back 
        });
})

//update
app.get('/api/posts/:id', function(req, res){
    console.log("Read post: ", req.params.id);

    PostModel.find( { _id: req.params.id}, 
        function(err, data) {
        res.json(data);
    });
})

app.put('/api/posts/:id', function(req, res){
    console.log("Read post: ", req.params.id);

    PostModel.findByIdAndUpdate( req.params.id, req.body, 
        function(err, post) {
        res.json(post);
    });
})


var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})