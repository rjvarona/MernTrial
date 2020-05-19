import React, { Component } from 'react';
import axios from 'axios';


debugger
const Yeet = props => (
    <tr>
        <td>{props.yeets.username}</td>
        <td>{props.yeets.date}</td>
        <td>{props.yeets.header}</td>
        <td>{props.yeets.yeets}</td>
    </tr>
)

export default class YeetPublic extends Component {


    constructor(props){
        super(props);

        // this.deleteYeet = this.deleteYeet.bind(this);


        this.state = {yeets: [] }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/yeets')
        .then(response => {
            this.setState({yeets: response.data});
            console.log(this.yeets);
        })
        .catch((error) => {console.log(error) });
    }

    yeetList(){
        //map maps all of the passed params to the yeets
        return this.state.yeets.map(currentYeet => {
            //returns another component
            return <Yeet yeets={currentYeet}  key={currentYeet._id}/>
        })
    }
    
    render() {
        return (
            <div>
                <h3>Yeets</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Date</th>
                            <th>Header</th>
                            <th>Yeet</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.yeetList() }
                    </tbody>

                </table>
            </div>
        );
    }
}