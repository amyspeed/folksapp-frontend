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
                <div className="disabled">
                <label htmlFor="image">Profile Picture (Upload under construction)</label>
                <br />
                <input
                    type="file"
                    // name="image"
                    // onChange={this.props.handleChange}
                    id="image-button"
                    accept="image/png, image/jpeg"
                />
                </div>
                {/* <button type="button" onClick={this.props.onClickHandler}>Upload</button> */}
                <br />
                <label>While the above upload link is still under construction, <br />
                    please enjoy updating your profile photo with one of these lovely selections:</label>
                <select name="image" onChange={this.props.handleChange}>
                    <option value="smiley.png">Smiley</option>
                    <option value="butterfly.jpg">Butterfly</option>
                    <option value="kitten.jpg">Kitten</option>
                    <option value="swans.jpg">Swans</option>
                    <option value="waterfall.jpg">Waterfall</option>
                </select>
                <br />
                <button className="box-buttons">Save</button>
            </form>
        );
    }
};