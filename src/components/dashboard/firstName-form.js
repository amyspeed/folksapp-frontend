import React from 'react';

export default class FirstNameForm extends React.Component {
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
                <label htmlFor="firstName">First Name</label>
                <br />
                <input 
                    value={this.props.firstName}
                    onChange={this.props.handleChange}
                    placeholder={this.props.placeHolderFirstName}
                    className="box-inputs"
                    name="firstName"
                    type="text"
                />
                <button className="box-buttons">Save</button>
            </form>
        );
    }
};