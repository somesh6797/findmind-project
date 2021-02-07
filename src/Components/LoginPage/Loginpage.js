import '../../App.css';
import Input from './Input';
import Password from './Password';
import style from '../mystyle.module.css'
import React, { Component } from 'react'
import Chkbox from './Chkbox';

export class Loginpage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       email:"",
       password:"",
       isLoggedIn:false
    }
  }

    render() {
        return (
          <div className={style.loginpage_div}>
          <h1>Log in! </h1>
          <br/>
          <Input 
          Property="email"  
          label="Email Address" 
          placeholder={"Enter Username"}/>
          <br/>
          <Password 
          Property="password" 
          label="Password" 
          placeholder={"Enter Password"}/>
          <br/>
          <div className={style.Inline}>
            <Chkbox value="Remember me"/>

            <span style={{alignSelf:"flex-end", position:"absolute",fontSize:"13px"}}> 
              <a href="google.com" style={{color:"white",textDecoration:"none"}}>Forgot Password</a> 
            </span>
          </div>
          <button className={style.buttonDecor} onClick={(e)=>{this.props.login(e)}}> Log in </button>
      </div>
          );
    }
}

export default Loginpage

