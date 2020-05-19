import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";


export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/yeets" className="navbar-brand">Yeets</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/yeets" className="nav-link">Yeets</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/users" className="nav-link">Users</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/Create" className="nav-link">Create</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
