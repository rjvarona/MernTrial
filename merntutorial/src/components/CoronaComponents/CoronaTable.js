import React, { Component } from 'react';
import axios from 'axios';



import MaterialTable from 'material-table';


export default class DisplayTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],

            columns: [
                { title: 'Country', field: 'Country' },
                { title: 'TotalConfirmed', field: 'TotalConfirmed', type: 'numeric' },
                { title: 'TotalRecovered', field: 'TotalRecovered', type: 'numeric' },
                { title: 'NewConfirmed', field: 'NewConfirmed' , type: 'numeric'},
                { title: 'NewDeaths', field: 'NewDeaths' , type: 'numeric'},
                { title: 'NewRecovered', field: 'NewRecovered' , type: 'numeric'},

            ],
        }
    }

    componentWillMount() {
        axios.get('http://localhost:5000/coronavirus')
            .then(response => {
                this.setState({ data: response.data.data.Countries });
                // console.log(this.state.coronadata);
            })
            .catch((error) => { console.log(error) });
    }


    render() {
        return (
            <div className="container">
                <MaterialTable
                    title="Coronavirus cases"
                    columns={this.state.columns}
                    data={this.state.data}

                />
            </div>);
    }
}



