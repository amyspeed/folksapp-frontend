import React from 'react';
import LastNameForm from './lastName-form';
import { connect } from 'react-redux';
import { PutInfoByUserId } from '../../actions/folks';

export class LastName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lastName: ""
        }
        this.updateInputValue = this.updateInputValue.bind(this);
        this.putData = this.putData.bind(this);
    }

    updateInputValue(event) {
        this.setState({
            lastName: event.target.value
        })
    }

    putData() {
        const userId = this.props.userId;

        const putData = {
            lastName: this.state.lastName
        }

        console.log(putData, userId);
        this.props.dispatch(PutInfoByUserId(userId, putData))

    }

    render() {
        return (
            <div>
                <LastNameForm
                    lastName={this.state.lastName}
                    placeHolderLastName={this.props.lastName}
                    handleChange={this.updateInputValue}
                    saveData={this.putData}
                />
            </div>
        );
    }
};

export default connect()(LastName);