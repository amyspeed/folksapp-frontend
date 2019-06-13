import React from 'react';
import {connect} from 'react-redux';
import { fetchFolks } from '../../actions/folks';
import FolkIcons from './folk-icons';
import requiresLogin from '../dashboard/requires-login';

export class Folks extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchFolks());
    }

    render() {
        let allFolks = this.props.allFolks;
        return (
            <div className="folks">
                <div className="row">
                    <div className="col-12">
                        <h1>Get to know the folks!</h1>
                    </div>
                </div>
                <FolkIcons allFolks={allFolks} />
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        allFolks: state.folks.allUsers
    };
};

export default requiresLogin()(connect(mapStateToProps)(Folks));