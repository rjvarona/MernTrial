
import React, { Component } from 'react';
import Square from './Square';
import { Row, Container, Col } from 'react-bootstrap'


export default class Board extends Component {

    constructor(props) {
        super(props);

        this.handleClick  = this.handleClick.bind(this);
        this.handleClick  = this.renderSquare.bind(this);

        this.state = {
            boardArr: Array(9).fill(null),
            xPlay: true,
        };
    }

    //change value

    //change next person

    //copyboardArr
    handleClick(index) {

        const copyBoard = [... this.state.boardArr]

        //calculate values
        if (this.state.xPlay) {
            copyBoard[index] = "X"
        }
        else {
            copyBoard[index] = "O"
        }

        this.setState(
            this.state.boardArr = copyBoard,
            this.state.xPlay = (!this.state.xPlay),
        );
    }

    //render 
    renderSquare(index) {

        return (
            <Square value={this.state.boardArr[index]} onClick={() => this.handleClick(index)} />
        );

    }


    //calculate winner



    render() {
        return (
            <Container>
              
                    {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
                    <br/>
                    {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
                    <br/>
                    {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
            </Container>
        );
    };
}


