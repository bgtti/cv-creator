import React, { Component } from 'react';
import SampleImage from './Images/Image_CV.jpg';
import './02-LeftSection.css';
import LeftSectionLanguages from './02-LeftSection-Languages.js';
import LeftSectionSkills from './02-LeftSection-Skills.js';
import LeftSectionProfile from './02-LeftSection-Profile.js';

class LeftSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //Contact
            EmailLabel: "Email:",
            Email: "samantha@igg.com",
            PhoneNumberLabel: "Phone Number:",
            PhoneNumber: "+41 70 555 22 11",
            AddressLabel: "Address",
            Address1: "Lilly Str 44",
            Address2: "6000 Luzern",
            LinkedInLabel: "LinkedIn Profile:",
            LinkedIn: "Linkedin.com/in/usernamehere",
            //Languages
            LanguageNr: "3", //probably in parent
            Languages: [
                { key: "0", name: "English", level: "6" },
                { key: "1", name: "Spanish", level: "5" },
                { key: "2", name: "French", level: "3" },
                { key: "3", name: "Italian", level: "3" },
                { key: "4", name: "Cantonese", level: "3" }
            ],
            //Skills
            SkillsNr: "3", //probably in parent
            Skills: [
                { key: "00", name: "Javascript" },
                { key: "01", name: "Python" },
                { key: "02", name: "MySQL" },
                { key: "03", name: "Docker" },
                { key: "04", name: "AWS" }
            ],
            //Profile
            ProfileNr: "2", //probably in parent
            Profile: [
                { key: "000", text: "Flexible to adapt to priorities, change in responsibilities and schedule." },
                { key: "001", text: "Enjoy planning and staying organized by making use of different available technologies." },
                { key: "002", text: "Attentive to code robustness, performance, stability, scalability and testability." },
                // { key: "003", text: "Solid experience in software architecture design, deep understanding Design Pattern and follow good practice." },
                // { key: "004", text: "Good communicator and enthusiastic team member." }
            ],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleLanguageChange = this.handleLanguageChange.bind(this);
        this.generateLanguageFields = this.generateLanguageFields.bind(this);
        this.generateProfileFields = this.generateProfileFields.bind(this);
        this.handleProfileOrSkillChange = this.handleProfileOrSkillChange.bind(this);
        this.generateSkillFields = this.generateSkillFields.bind(this);
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleLanguageChange(e) {
        let languages = [...this.state.Languages];
        if (e.target.dataset.langid === "langName") {
            languages[e.target.dataset.langindex].name = e.target.value;
            this.setState({
                Languages: languages
            });
        } else if (e.target.dataset.langid === "langLevel") {
            languages[e.target.dataset.langindex].level = e.target.dataset.langlevel;
            this.setState({
                Languages: languages
            });
        }
    }
    generateLanguageFields() {
        let languages = [...this.state.Languages];
        let langSpoken = parseInt(this.state.LanguageNr)
        let popNr = 5 - langSpoken;
        languages.splice(langSpoken, popNr);

        return (
            <div>
                {languages.map(item => (
                    < LeftSectionLanguages langIndex={`${item.key}`} key={item.key} value={item.name} level={item.level} handleLanguageChange={this.handleLanguageChange} />
                ))}
            </div>
        )
    }
    handleProfileOrSkillChange(e) {
        if (e.target.dataset.type === "profile") {
            let profile = [...this.state.Profile];
            profile[parseInt(e.target.dataset.profile)].text = e.target.value;
            this.setState({
                Profile: profile
            });
        } else if (e.target.dataset.type === "skill") {
            let skills = [...this.state.Skills];
            skills[parseInt(e.target.dataset.skill)].name = e.target.value;
            this.setState({
                Skills: skills
            });
        }
    }
    generateProfileFields() {
        let profiles = [...this.state.Profile];
        profiles.splice(parseInt(this.state.ProfileNr), (3 - parseInt(this.state.ProfileNr)));
        return (
            <div>
                {profiles.map(item => (
                    < LeftSectionProfile profIndex={`${item.key}`} key={item.key} value={item.text} handleChange={this.handleProfileOrSkillChange} />
                ))}
            </div>
        )
    }
    generateSkillFields() {
        let skills = [...this.state.Skills];
        skills.splice(parseInt(this.state.SkillsNr), (5 - parseInt(this.state.SkillsNr)));
        return (
            <div>
                {skills.map(item => (
                    < LeftSectionSkills skillIndex={`${item.key}`} key={item.key} value={item.name} handleChange={this.handleProfileOrSkillChange} />
                ))}
            </div>
        )
    }
    render() {
        return (
            <section className="LeftSection">
                <form action="">
                    <input type="image" name="ImageCV" id="ImageCV" src={SampleImage} alt="ImageCV" className="LeftSection-Image" />

                    <fieldset className="LeftSection-Fieldset">
                        <legend>Contact</legend>
                        <p className='LeftSection-Margin0'>
                            <label htmlFor="EmailLabel">
                                <input type="text" name="EmailLabel" id="EmailLabel" value={this.state.EmailLabel} onChange={this.handleChange} className="LeftSection-Labels LeftSection-InputField" placeholder="Add a label" />
                            </label>
                            <label htmlFor="Email">
                                <input type="text" name="Email" id="Email" value={this.state.Email} onChange={this.handleChange} className="LeftSection-InputField" placeholder="Add information" />
                            </label>
                        </p>
                        <br className="LeftSection-BrTag" />
                        <p className='LeftSection-Margin0'>
                            <label htmlFor="PhoneNumberLabel">
                                <input type="text" name="PhoneNumberLabel" id="PhoneNumberLabel" value={this.state.PhoneNumberLabel} onChange={this.handleChange} className="LeftSection-Labels LeftSection-InputField" placeholder="Add a label" />
                            </label>
                            <label htmlFor="PhoneNumber">
                                <input type="text" name="PhoneNumber" id="PhoneNumber" value={this.state.PhoneNumber} onChange={this.handleChange} className="LeftSection-InputField" placeholder="Add information" />
                            </label>
                        </p>
                        <br className="LeftSection-BrTag" />
                        <p className='LeftSection-Margin0'>
                            <label htmlFor="AddressLabel">
                                <input type="text" name="AddressLabel" id="AddressLabel" value={this.state.AddressLabel} onChange={this.handleChange} className="LeftSection-Labels LeftSection-InputField" placeholder="Add a label" />
                            </label>
                            <label htmlFor="Address1">
                                <input type="text" name="Address1" id="Address1" value={this.state.Address1} onChange={this.handleChange} className="LeftSection-InputField" placeholder="Add information" />
                            </label>
                            <label htmlFor="Address2">
                                <input type="text" name="Address2" id="Address2" value={this.state.Address2} onChange={this.handleChange} className="LeftSection-InputField" placeholder="Add information" />
                            </label>
                        </p>
                        <br className="LeftSection-BrTag" />
                        <p className='LeftSection-Margin0'>
                            <label htmlFor="LinkedInLabel">
                                <input type="text" name="LinkedInLabel" id="LinkedInLabel" value={this.state.LinkedInLabel} onChange={this.handleChange} className="LeftSection-Labels LeftSection-InputField" placeholder="Add a label" />
                            </label>
                            <label htmlFor="LinkedIn">
                                <input type="text" name="LinkedIn" id="LinkedIn" value={this.state.LinkedIn} onChange={this.handleChange} className="LeftSection-InputField" placeholder="Add information" />
                            </label>
                        </p>
                        <br className="LeftSection-BrTag" />
                    </fieldset>

                    <fieldset className="LeftSection-Fieldset">
                        <legend>Languages</legend>
                        {this.generateLanguageFields()}
                    </fieldset>
                    <fieldset className="LeftSection-Fieldset">
                        <legend>Skills</legend>
                        {this.generateSkillFields()}
                    </fieldset>
                    <fieldset className="LeftSection-Fieldset">
                        <legend>Profile</legend>
                        {this.generateProfileFields()}
                    </fieldset>
                </form>
            </section>
        )
    }
}
export default LeftSection;