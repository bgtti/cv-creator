import React, { Component } from 'react';
import './02-LeftSection.css';

class LeftSectionSkills extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.handleChange(e)
    }
    render() {
        return (
            <div className='LeftSection-SkillsSubContainer'>
                <div className='LeftSection-SkillsBulletPoint'></div>
                <p>
                    <label htmlFor={`Skill${this.props.skillIndex}`}>
                        <input type="text" name={`Skill${this.props.skillIndex}`} id={`Skill${this.props.skillIndex}`} placeholder="Add a skill." value={this.props.value} data-type="skill" data-skill={this.props.skillIndex} onChange={this.handleChange} className='LeftSection-SkillsInput' />
                    </label>
                </p>
            </div>
        )
    }
}
export default LeftSectionSkills;
