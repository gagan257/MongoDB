 const {MongoClient} = require('mongodb');

 const MONGO_URL = 'mongodb://localhost:27017';
 const DB_NAME = 'tododb';

 // ASYNC IIFE

 (async () =>{

    const client = await MongoClient.connect(MONGO_URL)

    const tododb = client.db(DB_NAME)

    console.log(tododb)
    
 })()