import React, { Component } from 'react';
import axios from 'axios';


debugger
const Yeet = props => (
    <tr>
        <td>{props.yeets.username}</td>
        <td>{props.yeets.date}</td>
        <td>{props.yeets.header}</td>
        <td>{props.yeets.yeets}</td>
        <td><a href="#" onClick={() => { props.deyeetYeet(props.yeets._id) }}>delete</a></td>
    </tr>
)

export default class YeetPublic extends Component {


    constructor(props){
        super(props);

        this.deyeetYeet = this.deyeetYeet.bind(this);
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
            return <Yeet yeets={currentYeet}  deyeetYeet={this.deyeetYeet}  key={currentYeet._id}/>
        })
    }


    
  deyeetYeet(id) {
    axios.delete('http://localhost:5000/yeets/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
         yeets: this.state.yeets.filter(el => el._id !== id)
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
                            <th>Actions</th>
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