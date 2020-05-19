import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";


export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/YeetComponent" className="navbar-brand">Yeets</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/YeetComponent" className="nav-link">Yeets</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/users" className="nav-link">Users</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
