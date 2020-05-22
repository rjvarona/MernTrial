import React, { Component,setState } from 'react';
import Body from './body'

export default class Header extends Component {

    constructor(){
        super();
        this.state = {
            title: 'title1'
        }
    }

    onChangeTitle(newTitle){
        this.setState({
            title: newTitle
        });

    } 

    render() {
        return (
            <Body onClick={this.onChangeTitle.bind(this,"yeet")} > {this.state.title} </Body>
        );
    };
}