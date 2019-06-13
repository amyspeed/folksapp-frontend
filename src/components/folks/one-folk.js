import React from 'react';
import {connect} from 'react-redux';
import { fetchFolkById } from '../../actions/folks';
import requiresLogin from '../dashboard/requires-login';

export class OneFolk extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchFolkById(this.props.match.params.id));
    }

    render() {
        console.log(this.props.oneFolk);
        let folk = this.props.oneFolk;
        console.log(folk);
        return (
            <div className="one-folk">
                <div className="row">
                    <div className="col-12">
                        <div className = "box">
                            <h1>{folk.firstName} {folk.lastName}</h1>
                            <img src={folk.profilePic} alt="profile pic" />
                            <div className="box-content">
                                <p>{folk.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        oneFolk: state.folks.oneUser
    };
};

export default requiresLogin()(connect(mapStateToProps)(OneFolk));