import React from 'react';


export default class DisplayProfile extends React.Component {

    render() {
        return (
            <div>
                <h1>{this.props.firstName} {this.props.lastName}</h1>
                <img src={this.props.profilePic} alt="profile pic" />
                <div className="box-content">
                    <p>{this.props.description}</p>
                    <button onClick={this.props.handleClick} className = "box-buttons">Edit Profile</button>
                </div>
            </div>
        );
    }
};