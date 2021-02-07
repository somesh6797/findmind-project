import React, { Component } from 'react'
import style from './mystyle.module.css'

export class NewTaskBoxButton extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
             
        }
    }
    setu=()=>{
        console.log("From setu")
    }
    
    render() {
        return (
                <div className={style.new_task_box_button} onClick={(e)=>{this.props.addTaskBox()}}>
                    +
                </div>
        )
    }
}

export default NewTaskBoxButton
