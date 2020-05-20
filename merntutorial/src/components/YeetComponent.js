import React, { Component } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import CreateYeet from "./CreateYeetComponent";


debugger

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const Yeet = props => (
    <tr>
        <td>{props.yeets.username}</td>
        <td>{props.yeets.date}</td>
        <td>{props.yeets.header}</td>
        <td>{props.yeets.yeets}</td>
        <td><a href="#" onClick={() => { props.deyeetYeet(props.yeets._id) }}>delete</a></td>
    </tr>


)

const YeetCard = props => (
    <div className="col-4">
        <Card >
            <CardActionArea>

                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.yeets.header}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.yeets.yeets}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>

                <Button size="small" color="primary">
                    <a href="#" onClick={() => { props.deyeetYeet(props.yeets._id) }}>Delete </a>

                </Button>
            </CardActions>
        </Card>

        <br />
        <br />
    </div>

)



export default class YeetPublic extends Component {

    constructor(props) {
        super(props);

        this.deyeetYeet = this.deyeetYeet.bind(this);
        this.state = { yeets: [] }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/yeets')
            .then(response => {
                this.setState({ yeets: response.data });
                console.log(this.yeets);
            })
            .catch((error) => { console.log(error) });
    }

    yeetCards() {
        return this.state.yeets.map(currentYeet => {
            return <YeetCard yeets={currentYeet} deyeetYeet={this.deyeetYeet} key={currentYeet._id} />
        })
    }

    yeetList() {
        //map maps all of the passed params to the yeets
        return this.state.yeets.map(currentYeet => {
            //returns another component
            return <Yeet yeets={currentYeet} deyeetYeet={this.deyeetYeet} key={currentYeet._id} />
        })
    }

    deyeetYeet(id) {
        axios.delete('http://localhost:5000/yeets/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            yeets: this.state.yeets.filter(el => el._id !== id)
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <div className="container">
                <CreateYeet/>
                <div class="row">
                    {this.yeetCards()}
                </div>
            </div>
        );
    }
}

