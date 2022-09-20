import React, { Component } from 'react';
import './01-CVPage.css';
import LeftSection from './02-LeftSection.js';
import RightSection from './03-RightSection.js'

class CVPage extends Component {
    render() {
        return (
            <div className='CVPage'>
                <div className='CVPage-TopMargin'></div>
                <div className='CVPage-Content'>
                    <LeftSection
                        LanguageNr={this.props.LanguageSetting}
                        SkillsNr={this.props.SkillsSetting}
                        ProfileNr={this.props.ProfileSetting}></LeftSection>
                    <RightSection
                        ExperienceNr={this.props.ExperienceSetting}
                        EducationNr={this.props.EducationSetting}></RightSection>
                    <div className='CVPage-RightMargin'></div>
                </div>
            </div>
        )
    }
}
export default CVPage;