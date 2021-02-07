import './App.css';
import Loginpage from './Components/LoginPage/Loginpage';
import SignupPage from './Components/SignupPage/SignupPage';
import React, { Component } from 'react'
import Taskboard from './Components/TaskBoard/Taskboard';
import style from './Components/mystyle.module.css'
import { DataProvider } from './Components/ContextComp';


export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       element:"",
       email:"",
       password:"",
       isLoggedIn:false
    }
  }
  
  // below function used for the input and password controlled component
  inputHandleChange=(property,value)=>{
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




  handleClick=(operation,e)=>{
     
    if(operation==="Login"){
      this.setState({element:<Loginpage login={this.login}/>})
    }
    else if(operation==="Sign Up"){
      this.setState({element:<SignupPage/>})
      
    }
  }


  render() {
    if(this.state.isLoggedIn){
      return<Taskboard/>
    }else{
       return(
     <React.Fragment>
       <DataProvider value={{statecopy:this.state,handleChange:this.inputHandleChange}}>
    <div className={style.container}>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <button id="upBtn"className={style.buttonDecor} onClick={(e)=>{this.handleClick("Login",e)}}>Login</button>
        <br/>
        <button id= "downBtn"className={style.buttonDecor} onClick={(e)=>{this.handleClick("Sign Up",e)}}> Sign Up</button>
      </div>
      <div className="App">
        {this.state.element}
      </div>
    </div>
    </DataProvider>
    </React.Fragment>
   )
  }
}
}
export default App
