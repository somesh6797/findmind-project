import React, { Component } from 'react'
import style from '../mystyle.module.css'

import { faPenFancy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import EditTaskPortal from '../EditTaskPortal'



export class Task extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    check=(e)=>{
        if(e.target.checked){
            console.log("object");
            e.target.className=style.checked
        }
        else
        {
         e.target.className=style.unchecked
        }
    }
    render() {
        return (
        <div  className={style.task}>
            
            <input 
            type="checkbox" 
            className={style.unchecked} 
            onChange={(e)=>{this.check(e)}} 
            name="completed_checkbox" 
            id=""
            />
            <div 
            className={style.tasklabel}>
                {this.props.item.text}
            </div>
            <div className={style.edittask}>
                 <FontAwesomeIcon icon={faPenFancy} onClick={this.props.editTask}/> 
            </div>
            
            {/* <EditTaskPortal deleteTask={this.props.deleteTask} taskKey={this.props.item.key}/> */}
            
        </div>
        )
    }
}

export default Task
