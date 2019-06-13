import React from 'react';

export default class DescriptionForm extends React.Component {
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
                <label htmlFor="description">Description</label>
                <br />
                <textarea
                    value={this.props.description}
                    onChange={this.props.handleChange}
                    placeholder={this.props.placeHolderDecription}
                    className="box-inputs"
                    name="description"
                    rows="5"
                ></textarea>
                <button className="box-buttons">Save</button>
            </form>
        );
    }
};