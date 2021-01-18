import React,{ Component } from 'react'
import classes from './layout.module.css'
import Nav from '../../components/nav/nav'
import Home from '../../components/home/home'
import { Route } from 'react-router-dom'
import CreateAccount from '../../components/createAccount/createAccount'
import axios from '../../components/axiosIns/axiosIns'
import Aboutus from '../../components/aboutus/aboutus'
class Layout extends Component{
  state = {
    data:{
      
    },
  }
  shouldComponentUpdate(nextProps,nextState){
    return nextState!=this.state
  }
  dataHandler = () => {
    axios.get('users.json').then((response) => {
      this.setState({data:response.data})
    }).catch((error)=> console.log(error))
  }
  componentDidMount(){
    this.dataHandler();
  }
  render(){ 
    return(
      <div>
          <Nav count={this.state.data ? Object.keys(this.state.data).length : 0} />
          <Route path='/create-account' exact render={() => <CreateAccount fun={this.dataHandler}/>} />
          <Route path='/' exact component={Home} />
          <Route path='/about-us' exact render={()=><Aboutus data={this.state.data}/>} />
          {this.props.children}
      </div>
    )
  }
}

export default Layout;