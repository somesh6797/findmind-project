import React, { Component } from 'react'
import { DataConsumer } from '../ContextComp'
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
                <DataConsumer>
                    {(value)=>{
                        // console.log(value.statecopy.email)
                        return(
                        <form action="" className={style.DefWidth}>
                        <fieldset className={style.fieldsetBorder}>
                            <legend>
                                {this.props.label}
                            </legend>
                            <input type="text" 
                            value={value.statecopy.email} 
                            placeholder={this.props.placeholder} 
                            onChange={(e)=>{
                                value.handleChange(this.props.Property,e.target.value)}} 
                            className={style.hide_input_border}/>
                        </fieldset>
                    </form>
                    )}}
                </DataConsumer>


            </React.Fragment>
        )
    }
}

export default Input
