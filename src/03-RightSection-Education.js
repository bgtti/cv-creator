import React, { Component } from 'react';
import './03-RightSection.css';

class RightSectionEducation extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.handleChange(e)
    }
    render() {
        return (
            <div className='RightSection-EducationSubContainer RightSection-TimelineContainer'>
                <div className='RightSection-TimelineSubContainer' >
                    <div className='RightSection-TimelinePoint'></div>
                    <div className='RightSection-TimelineLine'></div>
                </div>
                <div className='RightSection-TimelineContentContainer'>
                    <label htmlFor={`Education${this.props.eduIndex}`}>
                        <input type="text" name={`Education${this.props.eduIndex}`} id={`Education${this.props.eduIndex}`} value={this.props.institution} data-type="education" data-edu={this.props.eduIndex} data-edtype={"institution"} placeholder="Name of institution" onChange={this.handleChange} className='RightSection-TimelineInputField RightSection-TimelineInputHeading' />
                    </label>
                    <label htmlFor={`YearRange${this.props.eduIndex}`}>
                        <input type="text" name={`YearRange${this.props.eduIndex}`} id={`YearRange${this.props.eduIndex}`} value={this.props.yearRange} data-type="education" data-edu={this.props.eduIndex} data-edtype={"years"} placeholder="Date" onChange={this.handleChange} className='RightSection-TimelineInputField RightSection-TimelineInputYear' />
                    </label>
                    <p>
                        <label htmlFor={`EducationDescription${this.props.eduIndex}`}>
                            <textarea name={`EducationDescription${this.props.eduIndex}`} id={`EducationDescription${this.props.eduIndex}`} cols="58" value={this.props.text} data-type="education" data-edu={this.props.eduIndex} data-edtype={"text"} placeholder="Add education description" onChange={this.handleChange} className='RightSection-TextArea RightSection-TimelineTextArea'></textarea>
                        </label>
                    </p>
                </div>
            </div>
        )
    }
}
export default RightSectionEducation;