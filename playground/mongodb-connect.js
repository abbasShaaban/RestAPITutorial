// const  MongoClient = require('mongodb').MongoClient;
const  {MongoClient,ObjectID} = require('mongodb');
// // var user = {name:'abbas'};
// // var {name} = user;
// // console.log(name);
// //
// // return;
//
// var obj = new ObjectID();
// console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) =>{
    if(err){
       return console.log(err);
    }
    console.log('Connected to mongodb Server');
    const db = client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // },(err,result)=>{
    //     if(err)
    //         return console.log('Un able to inster todo',err);
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });
    db.collection('Users').insertOne({
        name:'Hasan',
        age: 23,
        location: 'haris, South Lebanon'
    },(err,result)=>{
        if(err)
           return console.log('Unable to insert data',err);
        console.log(result.ops[0]._id.getTimestamp());

    });
    client.close();
});