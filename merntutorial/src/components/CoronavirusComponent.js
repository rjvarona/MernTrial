import React, { Component } from 'react';
import axios from 'axios';

import CoronaTable from './CoronaComponents/CoronaTable'

debugger




export default class CornavirusComponent extends Component {


    constructor(props) {
        super(props);
        this.state = { coronadata: [] }
    }

 

    render() {
        return (
            <div>
                    <CoronaTable/>
            </div>
        );
    }
}