import React, { Component } from 'react'
import '../../App.css';
import style from '../mystyle.module.css'
import Chkbox from './Chkbox';
import Input from './Input';
import Password from './Password';

export class SignupPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username:"",
            email:"",
            password:"",     
        }
    }

    signUp=()=>{
        let data;
        data=JSON.parse(localStorage.getItem("state"))
        if(this.state.username!=="" && this.state.password!=="" && this.state.email!=="")
        {
            if(data){
                localStorage.setItem("state",JSON.stringify([...data,(this.state)]))
            }else
            {
            localStorage.setItem("state",JSON.stringify([(this.state)]))
            }
        }
        alert("Login Using email: "+this.state.email+" password: "+this.state.password)
        this.setState({username:"",email:"",password:""})
    }
    
    setProperty=(property,value)=>{
        this.setState({...this.state,[property]:value});
    }

    render() {
        return (
            <React.Fragment>
                <div action="" className={style.loginpage_div}>
                <h1>Sign Up</h1>
                <br/>
                <Input label="Username" Property="username" value={this.state.username} setProperty={this.setProperty} placeholder="Enter Name"/>
                <br/>

                <Input label="Email Address" Property="email" value={this.state.email} setProperty={this.setProperty} placeholder="Enter Email Adress"/>
                <br/>

                <Password label="Password" Property="password" value={this.state.password} setProperty={this.setProperty} placeholder="Enter Password"/>
                <br/>
                <div className={style.Inline}>
                    <Chkbox value=" I accept the term and condition "/>
                </div>
                <br/>
                <button id= "downBtn" className={style.buttonDecor} onClick={this.signUp}>Sign Up</button>
                </div>
            </React.Fragment>
        )
    }
}
export default SignupPage
