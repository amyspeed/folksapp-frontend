import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Welcome from './welcome';
import Register from './register';
import LogIn from './login';
import smiley from '../../images/smiley.png'

export function Landing(props) {
    if (props.loggedIn) {
        //redirect to dashboard if already logged in
        return <Redirect to="/dashboard" />;
    }
    
    return (
        <div className = "landing">
            <div className="row">
                <div className="col-12">
                    <Welcome />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="box log-box">
                        <h2 className="box-title">Register</h2>
                        <Register />
                    </div>
                </div>
                <div className="col-6">
                    <div className="box log-box">
                        <h2 className="box-title">Log In</h2>
                        <LogIn />
                        <img id="smiley" src={smiley} alt="smiley face" />
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Landing);