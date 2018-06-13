
const  {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) =>{
    if(err){
       return console.log(err);
    }
    console.log('Connected to mongodb Server');
    const db = client.db('TodoApp');
    // delete many
    // db.collection('Todos').deleteMany({text:'eat Lunch'}).then((obj)=>{
    //     console.log(obj)
    // },(err)=>{
    //     console.log('error deleteting data',err);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text:'play'}).then((obj)=>{
    //     console.log(obj.result.ok === 1? `${obj.result.n} item(s) was deleted`:'it si not deleted')
    // },(err)=>{
    //     console.log('error deleteting data',err);
    // });
    //find one and delete

    // db.collection('Todos').findOneAndDelete({text:'play'}).then((obj)=>{
    //     console.log(obj.value)
    // },(err)=>{
    //     console.log('error deleteting data',err);
    // });
    db.collection('Users').deleteMany({name:'abbas'});
    db.collection('Users').findOneAndDelete({_id:new ObjectID('5b20f3d48510e40f103c49e4')})
});