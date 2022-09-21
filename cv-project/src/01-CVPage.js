import React, { Component } from 'react';
import './01-CVPage.css';
import LeftSection from './02-LeftSection.js';
import RightSection from './03-RightSection.js'

class CVPage extends Component {
    constructor(props) {
        super(props);
        this.resizeTextArea = this.resizeTextArea.bind(this);
    }
    resizeTextArea(e) {
        e.target.style.height = "auto";
        e.target.style.height = e.target.scrollHeight + "px";
    }
    render() {
        return (
            <div className='CVPage'>
                <div className='CVPage-TopMargin'></div>
                <div className='CVPage-Content'>
                    <LeftSection
                        resizeTextArea={this.resizeTextArea}
                        ImageSetting={this.props.ImageSetting}
                        LanguageNr={this.props.LanguageSetting}
                        SkillsNr={this.props.SkillsSetting}
                        ProfileNr={this.props.ProfileSetting}></LeftSection>
                    <RightSection
                        resizeTextArea={this.resizeTextArea}
                        ExperienceNr={this.props.ExperienceSetting}
                        EducationNr={this.props.EducationSetting}></RightSection>
                </div>
            </div>
        )
    }
}
export default CVPage;