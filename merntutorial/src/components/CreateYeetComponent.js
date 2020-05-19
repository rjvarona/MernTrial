import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

debugger
export default class CreateYeet extends Component{
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeHeader = this.onChangeHeader.bind(this);
        this.onChangeYeet = this.onChangeYeet.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            username: '',
            header: '',
            yeets: '',
            date: '',
            users: [],
        }
    }

    componentDidMount() {
        this.setState({
            users: ['test', 'yeer'],
            username: 'test user'
        })
    }


    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }

    
    onChangeHeader(e){
        this.setState({
            header: e.target.value
        });
    }

    onChangeYeet(e){
        this.setState({
            yeets: e.target.value
        });
    }

    onChangeDate(date){
        this.setState({
            date: date
        });
    }

    onSubmit(e){
        e.preventDefault();
        const yeet = {
            username: this.state.username,
            header: this.state.header,
            yeets: this.state.yeets,
            date: this.state.date,
        }
        console.log(yeet);

        axios.post('http://localhost:5000/yeets/add', yeet)
      .then(res => console.log(res.data));


        window.location = '/yeets'
    }


    render() {
        return(
            <div>
            <h3>Create New Yeet</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>Username: </label>
                <select
                    required
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeUsername}>
                    {
                      this.state.users.map(function(user) {
                        return <option 
                          key={user}
                          value={user}>{user}
                          </option>;
                      })
                    }
                </select>
              </div>
              <div className="form-group"> 
                <label>Header: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.header}
                    onChange={this.onChangeHeader}
                    />
              </div>
              <div className="form-group">
                <label>Yeet</label>
                <input 
                    type="text" 
                    className="form-control"
                    value={this.state.yeets}
                    onChange={this.onChangeYeet}
                    />
              </div>
              <div className="form-group">
                <label>Date: </label>
                <div>
                  <DatePicker
                    selected={this.state.date}
                    onChange={this.onChangeDate}
                  />
                </div>
              </div>
      
              <div className="form-group">
                <input type="submit" value="Create Yeet" className="btn btn-primary" />
              </div>
            </form>
          </div>
        )
    }
}