/*const {MongoClient} = require('mongodb')
const url= 'mongodb://localhost:27017';
const databaseName='e-comm'
const client= new MongoClient(url);

async function getData()
{
    let result = await client.connect();
    db= result.db(databaseName);
    collection = db.collection('products');
    let data = await collection.find({}).toArray();
    console.log(data)


}

getData();*/

/*const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017' ;
const database = 'hotel';
const client = new MongoClient(url);

async function getData(){
    let result = await client.connect();
    db = result.db(database);
    collection = db.collection('room')
    let data = await collection.find({}).toArray();
    console.log(data);
}
getData();*/

const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const databaseName = 'hotel';
const client = new MongoClient(url);


async function getData() 
{
    let result = await client.connect();
    db = result.db(databaseName);
    collection = db.collection('room');
    let data = await collection.find({}).toArray();
    console.log(data);

}


getData();