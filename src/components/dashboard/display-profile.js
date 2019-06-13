import React from 'react';


export default class DisplayProfile extends React.Component {

    render() {
        let image;
        if(this.props.image === undefined) {
            image = require('../../images/smiley.png');
        }
        else {
            image = require('../../images/'+this.props.image);
        }
        return (
            <div>
                <h1>{this.props.firstName} {this.props.lastName}</h1>
                <img src={image} alt="profile pic" />
                <div className="box-content">
                    <p>{this.props.description}</p>
                    <button onClick={this.props.handleClick} className = "box-buttons">Edit Profile</button>
                </div>
            </div>
        );
    }
};