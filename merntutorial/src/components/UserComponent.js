import React, { Component, setState } from 'react';
import axios from 'axios';
import {Table} from 'react-bootstrap'

debugger



const Users = (props) => {

    return (

        <tr>
            <td>{props.user.FirstName}</td>
            <td>{props.user.LastName}</td>
            <td>{props.user.PreferredName}</td>
            <td>{props.user.Age}</td>
            <td>{props.user.DOB}</td>
            <td><a href="#" onClick={() => { props.deleteUser(props.user._id) }}>delete</a></td>
        </tr>

    );
}


export default class UserPublic extends Component {


    constructor(props) {
        super(props);
        this.state = {
            users: [],
        }
    }

    componentWillMount() {
        axios.get('http://localhost:5000/users').then(response => {
            this.setState({ users: response.data });
            console.log(this.users);
        })


    }

    userShow() {
        return this.state.users.map(currUser => {
            return <Users user={currUser} deleteUser={this.deleteUser()}/>
        })
    }

    deleteUser(id){
        axios.delete('http://localhost:5000/users/' + id)
            .then(response => {console.log(response.data)});
        this.setState({
            users: this.state.users.filter(el => el._id !== id)
        })
    }


    render() {
        return (
            <div className="container">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>PreferredName</th>
                            <th>Age</th>
                            <th>DOB</th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* {this.userShow()} */}
                    </tbody>
                </Table>

            </div>
        );
    }




}