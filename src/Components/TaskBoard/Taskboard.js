import React, { Component } from 'react'
import style from '../mystyle.module.css'
import Taskbox from './Taskbox'

export class Taskboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            taskBoxes:[]
        }
    }
    
    addTaskBox=()=>{
        let taskBoxName=prompt("Enter list Name");
        this.setState({
            taskBoxes:[...this.state.taskBoxes,taskBoxName]
        })
    }


    render() {
       let allBox= this.state.taskBoxes.map((taskbox)=>{
            return <Taskbox taskBoxName={taskbox}/>
        })
        return (
            <div className={style.taskboard}>
                <header className={style.header}>    
                    <div className={style.logo}></div>
                    <span className={style.text_logo}>TaskBoard</span>
                    <div className={style.photo_container}>
                        <div className={style.photo}></div>
                    </div>
                </header>
                {allBox}
                
                <div className={style.new_task_box_button} onClick={(e)=>{this.addTaskBox()}}>
                    +
                </div>
            </div>
        )
    }
}

export default Taskboard