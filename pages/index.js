import React, { Fragment, useEffect, useState } from 'react'
import Head from 'next/head'

import MeetupItem from '../components/meetups/MeetupItem'
import MeetupList from '../components/meetups/MeetupList';
import { MongoConnect } from './api/mongo-connect';

const HomePage = (props) => {

    return (
        <Fragment>
            <Head>
                <title>Next-React meetup</title>
                <meta 
                name="description" 
                content='Browse a huge list of highly active react meetup'
                />
            </Head>
            <MeetupList meetups={props.meetups} />
        </Fragment>
    )
}

// on server after deployement runs for every request
// export const getServerSideProps = async(context) =>{

//     const req = context.req;
//     const res = context.res;

//     return {
//         props : {
//             meetups:DUMMY_MEETUP
//         }
//     }

// }

//pre rendering data fetching
export const getStaticProps = async () => {
    const meetupsCollection = await MongoConnect( {operation:"find"} )

    const documents = await meetupsCollection.find({}).toArray()
    // .then(docs=>{
    //     console.log(docs)
    //     for (let doc in docs){
    //         console.log(doc)
    //     }
    // }).catch(err=>{
    //     console.error(err)
    // })

    // const result = meetupsCollection.find();
   // console.log("===========meetupsCollection========")
   // console.log(documents)
    const update_meetupCollection = documents.map ( ( doc) => ( {...doc, id:doc._id.toString() , _id:doc._id.toString()}))
    console.log(update_meetupCollection)
   // console.log(update_meetupCollection)
    // console.log("===========meetupsCollection========")

    

    
    return {
        props: {
            meetups:update_meetupCollection
            
        },
        revalidate: 10
    }
}

export default HomePage