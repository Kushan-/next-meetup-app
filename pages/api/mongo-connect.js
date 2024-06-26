import { MongoClient } from 'mongodb'

export const MongoConnect = () => {
    const mongoPasscode = process.env['MONGODB_PASS'];
    const mongoUserName = process.env['DB_USER'];

    const mongoUri = `mongodb+srv://${mongoUserName}:${mongoPasscode}@cluster0.otwmt6m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


    return new MongoClient(mongoUri);

}

