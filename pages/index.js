import React, { useEffect, useState } from 'react'
import MeetupItem from '../components/meetups/MeetupItem'

import MeetupList from '../components/meetups/MeetupList';
import { PHASE_EXPORT } from 'next/dist/shared/lib/constants';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup!',
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address 10, 12345 Some City',
        description: 'This is a second meetup!',
    },
]

const HomePage = (props) => {

    return (
        <>
            <MeetupList meetups={props.meetups} />
        </>
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
    return {
        props: {
            meetups:DUMMY_MEETUPS
            
        },
        revalidate: 1
    }
}

export default HomePage