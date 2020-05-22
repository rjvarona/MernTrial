
import React, { Component } from 'react';
import {  Col } from 'react-bootstrap'


export default class Square extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            onCLick: props.onCLick,
        };
    }

    render() {
        return (
                <button style={{ width: "100px", height: "100px" }} onClick={this.state.onCLick} > {this.state.value}</button>
        

        )
    };
}
