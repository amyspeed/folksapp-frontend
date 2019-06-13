import React from 'react';
import FirstName from './firstName';
import LastName from './lastName';
import Description from './description';
import ProfilePic from './profile-pic';
import { Link } from 'react-router-dom';

export default class EditProfile extends React.Component {
    render() {
        return (
            <div>
                <FirstName firstName={this.props.firstName} userId = {this.props.userId}/>
                <LastName lastName={this.props.lastName} userId = {this.props.userId}/>
                <Description description={this.props.description} userId = {this.props.userId}/>
                <ProfilePic image={this.props.image} userId = {this.props.userId}/>
                <Link to="/">
                    <button className = "exit">Exit</button>
                </Link>
            </div>
        );
    }
};