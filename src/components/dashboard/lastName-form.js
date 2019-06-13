import React from 'react';

export default class LastNameForm extends React.Component {
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
                <label htmlFor="lastName">Last Name</label>
                <br />
                <input 
                    value={this.props.lastName}
                    onChange={this.props.handleChange}
                    placeholder={this.props.placeHolderLastName}
                    className="box-inputs"
                    name="lastName"
                    type="text"
                />
                <button className="box-buttons">Save</button>
            </form>
        );
    }
};