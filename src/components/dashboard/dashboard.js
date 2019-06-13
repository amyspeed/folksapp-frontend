import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchFolkById } from '../../actions/folks';
import DisplayProfile from './display-profile';
import EditProfile from './edit-profile';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchFolkById(this.props.userId));
    }

    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
        this.editing = this.editing.bind(this);
    }

    editing() {
        this.setState({
            editing: true
        })
    }

    render() {
        const userId = this.props.userId;
        console.log(this.props.image);

        return (
            <div className="dashboard">
                <div className="row dash-intro">
                    <h2>Hi, {this.props.firstName}!</h2>
                    <p>Welcome to your profile! Feel free to make updates to keep the folks in the loop...</p>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className = "box">
                            {this.state.editing
                                ? <EditProfile 
                                    image={this.props.image}
                                    firstName={this.props.firstName}
                                    lastName={this.props.lastName}
                                    description={this.props.description}
                                    userId = {userId}
                                /> 
                                : <DisplayProfile 
                                    handleClick={this.editing}
                                    image={this.props.image}
                                    firstName={this.props.firstName}
                                    lastName={this.props.lastName}
                                    description={this.props.description}
                                />
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        firstName: state.folks.oneUser.firstName,
        lastName: state.folks.oneUser.lastName,
        image: state.folks.oneUser.image,
        description: state.folks.oneUser.description,
        userId: state.auth.currentUser.id
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));