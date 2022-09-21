import React, { Component } from 'react';
import './02-LeftSection.css';

class LeftSectionProfile extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.handleChange(e);
        this.props.resizeTextArea(e);
    }
    render() {
        return (
            <p>
                <label htmlFor={`Profile${this.props.profIndex}`}>
                    <textarea name={`Profile${this.props.profIndex}`} id={`Profile${this.props.profIndex}`} placeholder="Add a paragraph about yourself." value={this.props.value} data-type="profile" data-profile={this.props.profIndex} cols="30" maxLength="600" onChange={(e) => { this.handleChange(e) }} className="LeftSection-ProfileTextArea"></textarea>
                </label>
            </p>
        )
    }
}
export default LeftSectionProfile;