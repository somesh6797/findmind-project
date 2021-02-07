import React from 'react'
import ReactDOM from 'react-dom'
import style from './mystyle.module.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBackspace, faTrash} from '@fortawesome/free-solid-svg-icons'
import { DataConsumer } from './ContextComp'


function EditTaskPortal(props) {
    return ReactDOM.createPortal(
        <div className={style.editportal_container}>
            <div className={style.editportal_innerbox}>
                <div className={style.modal_buttons}>
                    <div className={style.delete_task_icon}
                        onClick={(e)=>{props.deleteTask(e,props.taskKey)}}>
                        <FontAwesomeIcon icon={faTrash}/>
                    </div>
                    <div className={style.close_modal_icon} onClick={()=>{props.showModal(false)}}>
                        <FontAwesomeIcon icon={faBackspace}/>
                    </div>
                </div>
                <div className={style.modal_taskname}>{props.item.text}</div>
                <textarea placeholder="Add details" className={style.modal_add_details}></textarea>
                <div className={style.modal_add_date}>Add date</div>
                <div className={style.modal_to_another_list}>Move to another list</div>
                
            </div>
        </div>,
        document.getElementById("portal-root")
    )
}

export default EditTaskPortal
