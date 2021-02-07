import React, { Component } from 'react'
import style from '../mystyle.module.css'
import Taskbox from './Taskbox'

export class Taskboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    
    render() {
        return (
            <div className={style.taskboard}>
                <header className={style.header}>    
                    <div className={style.logo}></div>
                    <span className={style.text_logo}>TaskBoard</span>
                    <div className={style.photo_container}>
                        <div className={style.photo}></div>
                    </div>
                </header>
                <Taskbox taskBoxName={"My Task"}/>
            </div>
        )
    }
}

export default Taskboard