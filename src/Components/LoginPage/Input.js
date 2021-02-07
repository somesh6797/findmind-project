import React, { Component } from 'react'
import style from '../mystyle.module.css'

export class Input extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render() {
        return (
            <React.Fragment>
            <form action=""className={style.DefWidth}>
                <fieldset className={style.fieldsetBorder}>
                    <legend>
                        {this.props.label}
                    </legend>
                    
                    <input type="text" value={this.props.value} placeholder={this.props.placeholder} onChange={(e)=>{this.props.handleChange(this.props.Property,e.target.value)}} className={style.hide_input_border}/>
                </fieldset>
            </form>
            </React.Fragment>
        )
    }
}

export default Input
