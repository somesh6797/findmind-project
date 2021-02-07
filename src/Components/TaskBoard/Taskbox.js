import React, { Component } from 'react'
import style from '../mystyle.module.css'
import Task from'./Task'

export class Taskbox extends Component {
    constructor(props) {
        super(props)
        this.state = {
             items:[],
             currentItem:{
                 text:"",
                 key:"",
                 details:"",
                 date:""
             }
        }
    }

    addTask=(e)=>{
        const newItem=this.state.currentItem
        if(newItem.text!==""){
           const newItems=[...this.state.items,newItem]
            this.setState({
                    items:newItems,currentItem:{
                            text:"",
                            key:""
                        }
                }
            )
        }
    }

    handleInput=(e)=>{
        this.setState({
            currentItem:{
                    text:e.target.value,
                    key:Date.now()
                }
        })
    }

    deleteTask=(e,key)=>{
        let allItems=this.state.items;
        let item;
        for (item of allItems){
            if(item.key===key){
                item.text=""
            }
        }
        this.setState({items:allItems,currentItem:this.state.currentItem})
        // console.log(this.state.items)

    }


    
    render() { 
       let AllTasks=Array.from(this.state.items).map((item ,key)=>{
            return item.text!==""?<Task item={item} key={key}  deleteTask={this.deleteTask} editTask={this.editTask}/>:null
            
        })
        return (
            <div className={style.taskbox}>
                <div className={style.taskbox_name}>
                    <div className={style.boxname_text}>
                        {this.props.taskBoxName}
                    </div>
                    <div 
                    className={style.edit_taskbox} 
                    onClick={()=>{console.log("Edit task")}}> 
                     ... 
                    </div>
                </div>

                <div className={style.newtask}>
                    <div 
                    className={style.new_task_button} 
                    onClick={(e)=>{this.addTask(e)}}> 
                    + 
                    </div>
                    <input 
                    value={this.state.currentItem.text}
                    className={style.input_text} 
                    placeholder="New Task" 
                    onChange={(e)=>{this.handleInput(e)}}/>
                </div>
                {/* Map on items and render list of items */}
                {AllTasks}
                {/* <Task/> */}
            </div>
            
        )
    }
}

export default Taskbox
