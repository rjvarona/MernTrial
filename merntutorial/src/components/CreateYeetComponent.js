import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


debugger
export default class CreateYeet extends Component {
    constructor(props) {
        super(props);


        this.onChangeHeader = this.onChangeHeader.bind(this);
        this.onChangeYeet = this.onChangeYeet.bind(this);

        this.onSubmit = this.onSubmit.bind(this);


        this.state = {

            header: '',
            yeets: '',

        }
    }

    componentDidMount() {
    }


    onChangeHeader(e) {
        this.setState({
            header: e.target.value
        });
    }

    onChangeYeet(e) {
        this.setState({
            yeets: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();
        const yeet = {

            header: this.state.header,
            yeets: this.state.yeets,
        }
        console.log(yeet);

        axios.post('http://localhost:5000/yeets/add', yeet)
            .then(res => console.log(res.data));


        window.location = '/yeets'
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <form onSubmit={this.onSubmit}>

                            <Card >
                                <h3 style={{ textAlign: "center" }}>Create Yeet</h3>
                                <CardActionArea>

                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                        
                                            <TextField
                                                id="standard-multiline-flexible"
                                                label="header"
                                                required
                                                multiline
                                                rowsMax={4}
                                                value={this.state.header}
                                                onChange={this.onChangeHeader}
                                            />
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            <TextField
                                                type="text"
                                                required
                                                label="yeet"
                                                multiline
                                                className="form-control"
                                                value={this.state.yeets}
                                                rows={3}
                                                onChange={this.onChangeYeet}
                                            />
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <br/>
                                <br/>
                                <CardActions>

                                    <Button size="small" color="primary" type="submit" value="Create Yeet">
                                        <input value="create" type="submit" className="btn btn-primary" />

                                    </Button>
                                </CardActions>
                            </Card>

                        </form>

                        <div class="col-4"></div>
                    </div>
                </div>
                <br />
                <br />
            </div>
        )
    }
}