import React from 'react'
import classes from './aboutus.module.css'

const Aboutus = (props) => {
    const mykeys = Object.keys(props.data)
    const list = mykeys.map((ind) => {
        return(
            <h1>{props.data[ind].name} <br></br><span style={{color:'#bdc3c7'}}> {props.data[ind].email}</span></h1>
        )
    })
    return(
        <div className={classes.aboutus}>
            <h2>We are Chat App dedicated to you!</h2>
            <p>
                Online chat may refer to any kind of communication over the Internet that offers a real-time transmission of text messages from sender to receiver. Chat messages are generally short in order to enable other participants to respond quickly. Thereby, a feeling similar to a spoken conversation is created, which distinguishes chatting from other text-based online communication forms such as Internet forums and email. Online chat may address point-to-point communications as well as multicast communications from one sender to many receivers and voice and video chat, or may be a feature of a web conferencing service.
            </p>
            <h1 style={{background:'#3498db',color:'#ecf0f1'}}>Hi! there are so many people with us</h1>
            <div className={classes.ptr}>
                {list}
            </div>
        </div>
    )
}

export default Aboutus