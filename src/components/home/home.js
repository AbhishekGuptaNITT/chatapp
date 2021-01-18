import React from 'react'
import classes from './home.module.css'
import { NavLink, Route } from "react-router-dom";
import CreateAccount from '../createAccount/createAccount'
import Nav from '../nav/nav';
const Home = (props) => {
    return(
        <div className={classes.home}>
            <div className={classes.homecontent}>
                <h2>Hi! there</h2>
                <p>
                    we are very proud to have you on board
                </p>
            </div>
            <div style={{textAlign:'center'}}>
                <NavLink to='/create-account' className={classes.btn} style={{textAlign:'center'}}>Create New Account</NavLink>
                <NavLink to='/login' className={classes.btn} style={{textAlign:'center'}}>Log in</NavLink>
            </div>
        </div>
    )
}

export default Home