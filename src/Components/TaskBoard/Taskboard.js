import axios from 'axios'
import React, { Component } from 'react'
import style from '../mystyle.module.css'
import Taskbox from './Taskbox'

export class Taskboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            taskBoxes:[],
            imgURL:""
        }
    }
    
    addTaskBox=()=>{
        let taskBoxName=prompt("Enter list Name");
        if(taskBoxName!=="")
        {
            this.setState({
                taskBoxes:[...this.state.taskBoxes,taskBoxName]
            })
        }else{
            alert("Should not be empty!!!")
        }
    }

    componentDidMount(){
        let randint=Math.floor(Math.random()*100)
         axios.get("https://picsum.photos/id/"+randint+"/info")
         .then(responce=>{
             if(responce.status===200){
                this.setState({imgURL:responce.data.download_url})
             }
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
                            <img className={style.photo} src={this.state.imgURL} alt=""  height="100px" width="100px" />  
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