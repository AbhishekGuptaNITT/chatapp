import React,{ Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import CreateAccount from '../components/createAccount/createAccount'
import classes from './App.module.css'
import Layout from './layout/layout'
class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <Layout>
        </Layout>
      </BrowserRouter>
    )
  }
}

export default App;
/*
font-family: 'Fraunces', serif;
font-family: 'Kanit', sans-serif;
font-family: 'Open Sans', sans-serif;
font-family: 'Potta One', cursive;
*/