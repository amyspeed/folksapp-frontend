import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { Link } from 'react-router-dom';
import './nav.css';

export class Nav extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        let logOutButton;
        let allFolks;
        //Button appears when user is logged in
        if (this.props.loggedIn) {
            logOutButton = (
                <button className="nav-buttons" id="logout-btn" onClick={() => this.logOut()}>
                    Log Out
                </button>
            );
            allFolks = (
                <button className="nav-buttons" id="folks-btn">
                    All Folks
                </button>
            );
        }
        return (
            <nav role="navigation">
                <Link className="logo" to="/">
                    <h1 className="h1-logo">folksApp</h1>
                </Link>
                <Link to="/folks">
                    {allFolks}
                </Link>
                {logOutButton}
            </nav>
        );
    }
};

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Nav);