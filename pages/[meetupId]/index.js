import { ObjectId } from 'mongodb'

import MeetupDetail from '../../components/meetups/MeetupDetail'
import { MongoConnect } from '../api/mongo-connect';

const MeetupDetails = (props) => {
    return (
        <MeetupDetail
            image={props.meetupData.image}
            title={props.meetupData.title}
            address={props.meetupData.address}
            description={props.meetupData.description}
        />
    )
}

export const getStaticPaths = async () => {
    const meetupsCollection = await MongoConnect( {operation:"findWithProjection"})

    const meetupsDocs = await meetupsCollection.find({}, { projection: { _id: 1 } }).toArray();

    // console.log(meetupsDocs.map(doc => ({ params: { meetupId: doc._id.toString() } })))
    // client.close()
    return {
        fallback: false,
        paths: meetupsDocs.map(doc => ({ params: { meetupId: doc._id.toString() } }))
    };
}

export const getStaticProps = async (context) => {

    const meetupId = context.params.meetupId

    console.log("================")
    console.log(context)
    console.log("================")

    const meetupsCollection = await MongoConnect( {operation:"findOne", id:meetupId} )
    console.log(typeof(meetupId), meetupId)

    // console.log('String converted to ObjectId:', objectId, typeof(objectId));
    const selectedMeetup = await meetupsCollection.findOne({
        _id: new ObjectId(meetupId),
    });
    console.log("======== document found ===============")
    console.log(selectedMeetup)
    console.log("======== document found ===============")
    
    // client.close()

    return {
        props: {
            meetupData:{
                title:selectedMeetup.title,
                address:selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description

            }
        },
    }
}

export default MeetupDetails
