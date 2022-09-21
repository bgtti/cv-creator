import React, { Component } from 'react';
import './03-RightSection.css';

class RightSectionExperience extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.handleChange(e)
    }
    render() {
        return (
            <div className='RightSection-ExperienceSubContainer RightSection-TimelineContainer'>
                <div className='RightSection-TimelineSubContainer' >
                    <div className='RightSection-TimelinePoint'></div>
                    <div className='RightSection-TimelineLine'></div>
                </div>
                <div className='RightSection-TimelineContentContainer'>
                    <label htmlFor={`Company${this.props.expIndex}`}>
                        <input type="text" name={`Company${this.props.expIndex}`} id={`Company${this.props.expIndex}`} value={this.props.company} data-type="experience" data-exp={this.props.expIndex} data-extype={"company"} placeholder="Company name" onChange={this.handleChange} className='RightSection-TimelineInputField RightSection-TimelineInputHeading' />
                    </label>
                    <label htmlFor={`YearRange${this.props.expIndex}`}>
                        <input type="text" name={`YearRange${this.props.expIndex}`} id={`YearRange${this.props.expIndex}`} value={this.props.yearRange} data-type="experience" data-exp={this.props.expIndex} data-extype={"years"} placeholder="Date range" onChange={this.handleChange} className='RightSection-TimelineInputField RightSection-TimelineInputYear' />
                    </label>
                    <p>
                        <label htmlFor={`JobDescription${this.props.expIndex}`}>
                            <textarea name={`JobDescription${this.props.expIndex}`} id={`JobDescription${this.props.expIndex}`} cols="58" value={this.props.text} data-type="experience" data-exp={this.props.expIndex} data-extype={"text"} placeholder="Add job description" onChange={this.handleChange} className='RightSection-TextArea RightSection-TextAreaMinHeight RightSection-TimelineTextArea'></textarea>
                        </label>
                    </p>
                </div>
            </div>
        )
    }
}
export default RightSectionExperience;