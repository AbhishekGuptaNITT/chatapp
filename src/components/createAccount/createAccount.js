import React,{ Component } from 'react'
import axios from '../axiosIns/axiosIns'
import classes from './createAccount.module.css'

class CreateAccount extends Component{
    state={
        mode:true,   
    }
    signUp = () => {
        this.setState({mode:'process'})
        const x = document.getElementById('uname').value;
        const y = document.getElementById('upass').value;
        const z = document.getElementById('uemail').value;
        const obj = {
            name: x,
            email: z,
            password: y,
        }
        axios.post('/users.json',obj).then(
            (response) => {
                this.setState({mode:false})
                this.props.fun();
            }
        ).catch(
            (error) => {
                this.setState({mode:'error'})
            }
        )
    }
    render(){
        let content = (   
            <div className={classes.createaccount}>
                <form>
                <h2>HELLO</h2>
                <label>Name</label>
                <input type='text' id='uname' name='name' autoCapitalize="true" autoFocus placeholder='Enter Name Here'></input>
                <label>Email</label>
                <input type='email' id='uemail' placeholder='Your Email' />
                <label>Password</label>
                <input type='password' id='upass' name='pwd' placeholder='Create a strong password'></input>
                <button type='reset' className={classes.btn}>Reset</button>
                <button type='button' onClick={this.signUp} className={classes.btn} style={{background:'#27ae60',color:'#ecf0f1'}}>Register</button>
                </form>
            </div>
        )
        if(!this.state.mode){
            content = (
                <div className={classes.createaccount}>
                    <h1>REGISTRATION SUCCESS</h1>
                </div>
            )
        }
        if(this.state.mode=='error'){
            content = (
                <div className={classes.createaccount}>
                    <h1>REGISTRATION FAILED</h1>
                </div>
            )
        }
        if(this.state.mode=='process'){
            content = (
                <div className={classes.createaccount}>
                    <h1>PROCESSING...</h1>
                </div>
            )
        }
        return(
            <div>
                {content}
            </div>
        )
    }
}

export default CreateAccount