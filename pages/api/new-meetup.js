// api/new-meetup
import { MongoClient } from 'mongodb'
const handler = async (req, res) => {

    if (req.method === 'POST') {
        const postPayload = req.body;

        const {
            title,
            image,
            description,
            address
        } = postPayload

        const mongoPasscode = process.env['MONGODB_PASS'];
        const mongoUserName = process.env['DB_USER'];
        
        const mongoUri = `mongodb+srv://${mongoUserName}:${mongoPasscode}@cluster0.otwmt6m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


        const client = new MongoClient(mongoUri);

        try {
            await client.connect()
            console.log("Pinged your deployment. You successfully connected to MongoDB!");

            const db = client.db();

            const meetupsCollection = db.collection('meetups');

            const result = await meetupsCollection.insertOne(postPayload);

            res.status(210).json({
                'msg': 'inserted',
                'res': result
            })

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