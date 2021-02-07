import './App.css';
import Loginpage from './Components/LoginPage/Loginpage';
import SignupPage from './Components/SignupPage/SignupPage';
import React, { Component } from 'react'
import Taskboard from './Components/TaskBoard/Taskboard';
import style from './Components/mystyle.module.css'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       element:""
    }
  }
  

  handleClick=(operation,e)=>{
    
    
    if(operation==="Login"){
      this.setState({element:<Loginpage/>})
    }
    else if(operation==="Sign Up"){
      this.setState({element:<SignupPage/>})
      
    }
  }


  render() {
       return(
     <React.Fragment>
    {/* <div className={style.container}>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <button id="upBtn"className={style.buttonDecor} onClick={(e)=>{this.handleClick("Login",e)}}>Login</button>
        <br/>
        <button id= "downBtn"className={style.buttonDecor} onClick={(e)=>{this.handleClick("Sign Up",e)}}> Sign Up</button>
      </div>
      <div className="App">
        {this.state.element}
      </div>
    </div> */}
    <Taskboard/>
    </React.Fragment>
   )
  }
}

export default App
