import React, { Component } from 'react'
import style from '../mystyle.module.css'

export class Password extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
                <div>
                <form action="" className={style.DefWidth}>
                    <fieldset className={style.fieldsetBorder}>
                        <legend>
                            {this.props.label}
                        </legend>
                        <input type="password" value={this.props.value} placeholder={this.props.placeholder}className={style.hide_input_border} onChange={(e)=>{this.props.handleChange(this.props.Property,e.target.value)}}/>
                    </fieldset>
                </form>
                </div>
            )
    }
}

export default Password
