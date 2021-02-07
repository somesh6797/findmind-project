import React, { Component } from 'react'
import { DataConsumer } from '../ContextComp'
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
                <DataConsumer>
                {
                    (value)=>{
                        return(
                            <form action="" className={style.DefWidth}>
                                <fieldset className={style.fieldsetBorder}>
                                    <legend>
                                        {this.props.label}
                                    </legend>
                                    <input type="password" value={value.statecopy.password} placeholder={this.props.placeholder}className={style.hide_input_border} onChange={(e)=>{value.handleChange(this.props.Property,e.target.value)}}/>
                                </fieldset>
                            </form>
                        )
                    }
                }
                </DataConsumer>
                </div>
            )
    }
}

export default Password
