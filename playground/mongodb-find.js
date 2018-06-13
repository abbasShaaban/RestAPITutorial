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
    // console.log(db.collection('Todos').find({_id:new ObjectID('5b20ced33de1e71f94e8f8bf') }).toArray().then((docs)=>{
    //     console.log(docs);
    // }),(err)=>{
    //     console.log(err);
    // });
   // db.collection('Todos').find().count().then((count)=>{
   //      console.log(count);
   //  },(err)=>{
   //      console.log(err);
   //  });
    db.collection('Users').find({name:'abbas'}).toArray().then(
        (docs)=>{
            console.log(docs);
        },(err)=>{
            console.log(err);
        });

     client.close();
});