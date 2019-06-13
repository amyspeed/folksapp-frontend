import React from 'react';
import PicForm from './profile-pic-form';
import { connect } from 'react-redux';
import { PutInfoByUserId } from '../../actions/folks';

export class ProfilePic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: ""
        }
        this.updateInputValue = this.updateInputValue.bind(this);
        this.putData = this.putData.bind(this);
    }

    updateInputValue(event) {
        this.setState({
            image: event.target.value
        })
    }

    putData() {
        const userId = this.props.userId;

        const putData = {
            image: this.state.image
        }

        console.log(putData, userId);
        this.props.dispatch(PutInfoByUserId(userId, putData))

    }

    render() {
        return (
            <div>
                <PicForm
                    image={this.state.image}
                    placeHolderImage={this.props.image}
                    handleChange={this.updateInputValue}
                    saveData={this.putData}
                />
            </div>
        );
    }
};

export default connect()(ProfilePic);