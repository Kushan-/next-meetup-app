// api/new-meetup
import { MongoClient } from 'mongodb'
import { MongoConnect } from './mongo-connect';
const handler = async (req, res) => {

    if (req.method === 'POST') {
        const postPayload = req.body;
        const client = MongoConnect()

        try {

        //     await client.connect()
        //     console.log("successfully connected to MongoDB!");

        //     const db = client.db();

        //     const meetupsCollection = db.collection('meetups');
            const meetupsCollection = await MongoConnect({operation:"insertOne"})

            const result = await meetupsCollection.insertOne(postPayload);
            const docs = meetupsCollection.find()
            console.log(docs)
            res.status(210).json({
                'msg': 'inserted',
                'res': result
            })
            console.log(`Document inserted ${result.insertedId}`)

        } catch (error) {
            console.error(error)
            console.log("error in connection")
            res.status(501).json({
                msg:"internal server Error"
            })
        } finally {
            client.close();
        }
    }

}

export default handler