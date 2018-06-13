
const  {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) =>{
    if(err){
       return console.log(err);
    }
    console.log('Connected to mongodb Server');
    const db = client.db('TodoApp');
    // db.collection('Todos')
    //     .updateOne(
    //         {_id:new ObjectID('5b20f39faa6c4714a4dccf9a')},
    //         {$set:{completed:true}})
    //     .then((obj)=>{
    //         console.log('success',obj.result.ok ===1? ':ok':':not ok');
    //     },(err)=>{
    //         console.log(err);
    // });
    db.collection('Users')
        .findOneAndUpdate(
            {name:'Hasan'},
            {$inc:{age:1}})
        .then((obj)=>{
            console.log(obj);
        },(err)=>{
            console.log(err);
    });
    client.close()
});