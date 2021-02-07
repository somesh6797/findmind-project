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

  handleChange=(property,value)=>{
    this.setState({[property]:value})
  }

  login=(e)=>{
    let data=JSON.parse(localStorage.getItem("state"));
    let a;
    for (a of data){
      
      if(a.email===this.state.email && a.password===this.state.password)
      {
        this.setState({
          isLoggedIn:true
        })
      }
      else{
        this.setState({
        isLoggedIn:false
      })
      }
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
          handleChange={this.handleChange} 
          value={this.state.email} 
          placeholder={"Enter Username"}/>
          <br/>
          <Password 
          Property="password" 
          label="Password" 
          handleChange={this.handleChange} 
          value={this.state.password} 
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

