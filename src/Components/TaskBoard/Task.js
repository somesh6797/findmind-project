import React, { Component } from 'react'
import style from '../mystyle.module.css'

import { faPenFancy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import EditTaskPortal from '../EditTaskPortal'



export class Task extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             showModal:false
        }
    }
    

    check=(e)=>{
        if(e.target.checked){
            // console.log(e);
            e.target.className=style.checked
            e.target.parentElement.className=style.checkedlabel
        }
        else
        {
         e.target.className=style.unchecked
         e.target.parentElement.className=style.task
        }
    }

    showModal=(what)=>{
        this.setState({showModal:what})
    }
    render() {
        let modal;
        if (this.state.showModal) {
                modal=<EditTaskPortal showModal={this.showModal} deleteTask={this.props.deleteTask} item={this.props.item} taskKey={this.props.item.key}/>
        }
        else{
            modal=null;
        }
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
                 <FontAwesomeIcon icon={faPenFancy} onClick={()=>{
                    //  this.props.editTask();
                     this.showModal(true);
                 }}/> 
            </div>
            {modal}
            
            
            
        </div>
        )
    }
}

export default Task
