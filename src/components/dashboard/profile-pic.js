import React from 'react';
import PicForm from './profile-pic-form';
import { connect } from 'react-redux';
import { PutInfoByUserId } from '../../actions/folks';
import axios from 'axios';
import { API_BASE_URL } from '../../config';

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
            // image: event.target.files[0],
            // loaded: 0,
            image: event.target.value
        })
        console.log(this.state.image)
    }

    upload = () => {
        const data = new FormData() 
        data.append('file', this.state.image)
        axios
        .post(`${API_BASE_URL}/upload`, data, {})
        .then(res => {
                console.log(res.statusText)
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
                    handleChange={this.updateInputValue}
                    onClickHandler={this.upload}
                    saveData={this.putData}
                />
            </div>
        );
    }
};

export default connect()(ProfilePic);