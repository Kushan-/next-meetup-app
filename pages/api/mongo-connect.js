import { MongoClient } from 'mongodb'

export const MongoConnect = async(operation) => {
    console.log( operation )
    const mongoPasscode = process.env['MONGODB_PASS'];
    const mongoUserName = process.env['DB_USER'];

    const mongoUri = `mongodb+srv://${mongoUserName}:${mongoPasscode}@cluster0.otwmt6m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    const client = new MongoClient(mongoUri);
    await client.connect()
    const db = client.db()
    return db.collection('meetups');

    // if(params.operation === "insert"){
    //     // return document
    // }
    // if(params.operation === "insertOne"){
    //     // return document
    // }
    // if(params.operation === "find"){
    
    //     const meetupsDocs = await meetupsCollection.find({}, { projection: { _id: 1 } }).toArray();
    
    //     return meetupsDocs
    // }
    // if(params.operation === "findOne"){
    //     // return document
    // }
}

