import React, { Component } from 'react'

export class Chkbox extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div style={{alignSelf:"flex-start",marginTop:"-5px",fontSize:"13px"}}>
                <input type="checkbox" name="remember"/>
                <label htmlFor="remember" style={{color:"white"}}>{this.props.value} </label>
            </div>
        )
    }
}

export default Chkbox
