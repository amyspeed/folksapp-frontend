import React from 'react';
import FirstNameForm from './firstName-form';
import { connect } from 'react-redux';
import { PutInfoByUserId } from '../../actions/folks';

export class FirstName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: ""
        }
        this.updateInputValue = this.updateInputValue.bind(this);
        this.putData = this.putData.bind(this);
    }

    updateInputValue(event) {
        this.setState({
            firstName: event.target.value
        })
    }

    putData() {
        const userId = this.props.userId;

        const putData = {
            firstName: this.state.firstName
        }

        console.log(putData, userId);
        this.props.dispatch(PutInfoByUserId(userId, putData))

    }

    render() {
        return (
            <div>
                <FirstNameForm
                    firstName={this.state.firstName}
                    placeHolderFirstName={this.props.firstName}
                    handleChange={this.updateInputValue}
                    saveData={this.putData}
                />
            </div>
        );
    }
};

export default connect()(FirstName);