var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {ObjectID} = require('mongodb');

var app = express();

app.use(bodyParser.json());

app.listen(3000,()=>{
    console.log('the server is up at port 3000');
});

app.post('/todos',(req,res)=>{
   var todo = new Todo({
        text:req.body.text
    });
    todo.save().then((doc)=>{
        res.send(res.send(doc));
    },(err)=>{
        res.send(err.errors.text.message);
    });
});

app.get('/todos',  (req, res)=>{

    Todo.find().then((todos)=>{
        res.send(todos);
    },(err)=>{
        res.status(200).send(err);
    });
    console.log(res);
});
app.get('/todos',  (req, res)=>{

    Todo.find().then((todos)=>{
        res.send(todos);
    },(err)=>{
        res.status(200).send(err);
    });
    console.log(res);
});
app.get('/todos/:id',(req, res)=>{
    let id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    Todo.findById(id).then((todos)=>{
        if(!todos){
            res.status(404).send({});
        }
        res.send(todos);
    },(err)=>{
        res.status(400).send({});
    });
    console.log(res);
});

app.delete('/todos/:id',(req,res)=>{
    let id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    Todo.findByIdAndRemove(id).then((todo)=>{
        console.log('abbas');
        if(!todo)
           return res.status(404).send();
        res.status(200).send(todo);
    },(err)=>{
        res.status(400).send();
    });
});




