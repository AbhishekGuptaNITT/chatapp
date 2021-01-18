import React,{ useState, useEffect, Component } from 'react'
import classes from './nav.module.css'
import { NavLink } from 'react-router-dom'
import axios from '../axiosIns/axiosIns'
import { render } from '@testing-library/react'

class Nav extends Component{
    render(){
    return(
        <div className={classes.nav}>
            <NavLink to='/' className={classes.nl}>Chat App</NavLink>
            <div className={classes.navmenu}>
                <button>Home</button>
                <button>Features</button>
                <NavLink to='about-us' className={classes.btn}>About us</NavLink>
                <button>Registrations {this.props.count}</button>
            </div>
        </div>
    )
    }
}

export default Nav;