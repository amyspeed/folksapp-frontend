import React from 'react';
import DescriptionForm from './description-form';
import { connect } from 'react-redux';
import { PutInfoByUserId } from '../../actions/folks';

export class Description extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: ""
        }
        this.updateInputValue = this.updateInputValue.bind(this);
        this.putData = this.putData.bind(this);
    }

    updateInputValue(event) {
        this.setState({
            description: event.target.value
        })
    }

    putData() {
        const userId = this.props.userId;

        const putData = {
            description: this.state.description
        }

        console.log(putData, userId);
        this.props.dispatch(PutInfoByUserId(userId, putData))

    }

    render() {
        return (
            <div>
                <DescriptionForm
                    description={this.state.description}
                    placeHolderDescription={this.props.description}
                    handleChange={this.updateInputValue}
                    saveData={this.putData}
                />
            </div>
        );
    }
};

export default connect()(Description);