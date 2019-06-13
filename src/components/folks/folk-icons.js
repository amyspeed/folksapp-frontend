import React from 'react';
import { Link } from 'react-router-dom';

export default class FolkIcons extends React.Component {
    render() {
        console.log(this.props.allFolks);
        let allFolks = Array.from(this.props.allFolks);
        console.log(allFolks);
        let folkURL = '/folks/'
        return (
            <div className="row">
                {allFolks.map((user, index) => (
                <div key={index} className="col-2">
                    <Link to={folkURL + user.id}>
                        <div key={index} className = "box folk-icon-box">
                            <h3 className="box-title">{user.firstName} {user.lastName}</h3>
                            <img src={require("../../images/smiley.png")} alt="profile pic" />
                        </div>
                    </Link>
                </div>
                ))}  
            </div>

        )
    }
}