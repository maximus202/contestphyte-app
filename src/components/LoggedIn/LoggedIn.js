import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';

class LoggedOut extends Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken();
    }

    render() {
        return (
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Contests</Link></li>
                <li><Link to="/create-contest">Create contest</Link></li>
                <li><Link onClick={this.handleLogoutClick} to="/login">Logout</Link></li>
            </ul>
        );
    }
}

export default LoggedOut;