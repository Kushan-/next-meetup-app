import classes from './MeetupDetail.module.css'

const MeetupDetail = (props) => {
  console.log("=>>>>>>>>>> render meetupDetails")
  return (
    <section className={classes.detail}>
        <img src='' alt=''/>
        <h1>{props.title}</h1>
        <address>{props.address}</address>
        <p>{props.description}</p>
    </section>
  )
}

export default MeetupDetail