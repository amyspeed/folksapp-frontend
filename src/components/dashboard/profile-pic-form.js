import React from 'react';

export default class PicForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.saveData();

    }

    render() {
        return (
            <form className="box-content edit" onSubmit={e => this.handleSubmit(e)}>
                <label htmlFor="image">Profile Picture</label>
                <br />
                <input
                    type="file"
                    name="image"
                    value={this.props.image}
                    placeholder={this.props.placeHolderImage}
                    onChange={this.props.handleChange}
                    id="image-button"
                    accept="image/png, image/jpeg"
                />
                <button className="box-buttons">Save</button>
            </form>
        );
    }
};