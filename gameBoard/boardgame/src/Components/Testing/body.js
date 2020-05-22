import React, { Component } from 'react';


export default class Body extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'rj',
            age: 21,
            sports: 'tennis'
        }
    }



    render() {
        return (


            <button onClick={this.props.runFunc} className="btn btn-default"> {this.props.title} </button>


        );
    };
}