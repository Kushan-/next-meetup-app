import MeetupDetail from '../../components/meetups/MeetupDetail'

const MeetupDetails = () => {
    return (
        <MeetupDetail
            image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg'
            title='First Meetup'
            address='Some Street 5, Some City'
            description='This is a first meetup'
        />
    )
}

export const getStaticPaths = async () => {
    console.log("->>>>>>>>>> getStaticPATH")

    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1',
                },
            },
            {
                params: {
                    meetupId: 'm2',
                },
            },
        ],
    };
}

export const getStaticProps = async (context) => {
    console.log("->>>>>>>>>> getStaticPROPSS")

    const meetupId = context.params.meetupId

    console.log("================")
    console.log(context)
    console.log("================")

    return {
        props: {
            meetupData: {
                image:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
                id: meetupId,
                title: 'First Meetup',
                address: 'Some Street 5, Some City',
                description: 'This is a first meetup',
            },
        },
    }
}

export default MeetupDetails