import React, { Component } from 'react';
import './03-RightSection.css';
import RightSectionExperience from './03-RightSection-Experience.js'
import RightSectionEducation from './03-RightSection-Education.js'

class RightSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: "SAMANTHA BEE",
            AboutMe: "Diligent software designer with 3+ years of experience in business application development. Eager to design innovative solutions and user-friendly interfaces clients will love. Eager to join a new team of professionals and develop cutting-edge solutions with the newest available technology.",
            //Experience
            Experience: [
                { key: "0000", company: "AwesomeDees Ltd", years: "2015 - present", text: "Member of Agile Scrum developing team, I architect and design software solution for a wide range of clients. Implementing and negotiating changes with customers are part of my routine, and I enjoy taking ownership of the architecture of applications built for a global customer base." },
                { key: "0001", company: "Le Design Corp", years: "2019 - 2020", text: "During my internship in software design and development I used modern JavaScript libraries to create optimal solutions. The constant use of Figma, Canva, and Photoshop boosted my design skills, and I enjoyed wireframing beautiful smart websites to international clients. " },
                { key: "0002", company: "Company 3", years: "20XX - 20XX", text: "Lorem..." },
                { key: "0003", company: "Company 4", years: "20YY - 20YY", text: "Lorem..." },
                { key: "0004", company: "Company 5", years: "19XX - 19XX", text: "Lorem..." },
            ],
            //Education
            Education: [
                { key: "00000", institution: "Sissus University", years: "2015 - 2019", text: "Bsc in Computer Science, online degree." },
                { key: "00001", institution: "Liceu Bon Colegio", years: "2015", text: "Baccalaureate obtained." },
                { key: "00002", institution: "Institution 3", years: "20XX - 20XX", text: "Lorem..." },
                { key: "00003", institution: "Institution 4", years: "20YY - 20YY", text: "Lorem..." },
                { key: "00004", institution: "Institution 5", years: "19XX - 19XX", text: "Lorem..." },
            ],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleExperienceOrEducationChange = this.handleExperienceOrEducationChange.bind(this);
        this.generateExperienceFields = this.generateExperienceFields.bind(this);
        this.generateEducationFields = this.generateEducationFields.bind(this);
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleExperienceOrEducationChange(e) {
        if (e.target.dataset.type === "experience") {
            let experience = [...this.state.Experience];
            let theKey = e.target.dataset.extype;
            let obj = experience[parseInt(e.target.dataset.exp)];
            obj[theKey] = e.target.value;
            experience[parseInt(e.target.dataset.exp)] = obj;
            this.setState({
                Experience: experience
            });
        } else if (e.target.dataset.type === "education") {
            let education = [...this.state.Education];
            let theKey = e.target.dataset.edtype;
            let obj = education[parseInt(e.target.dataset.edu)];
            obj[theKey] = e.target.value;
            education[parseInt(e.target.dataset.edu)] = obj;
            this.setState({
                Education: education
            });
        }
    }
    generateExperienceFields() {
        let experience = [...this.state.Experience];
        experience.splice(parseInt(this.props.ExperienceNr), (5 - parseInt(this.props.ExperienceNr)));

        return (
            <div>
                {experience.map(item => (
                    < RightSectionExperience key={item.key} expIndex={item.key} company={item.company} yearRange={item.years} text={item.text} handleChange={this.handleExperienceOrEducationChange} />
                ))}
            </div>
        )
    }
    generateEducationFields() {
        let education = [...this.state.Education];
        education.splice(parseInt(this.props.EducationNr), (5 - parseInt(this.props.EducationNr)));

        return (
            <div>
                {education.map(item => (
                    < RightSectionEducation key={item.key} eduIndex={item.key} institution={item.institution} yearRange={item.years} text={item.text} handleChange={this.handleExperienceOrEducationChange} />
                ))}
            </div>
        )
    }
    render() {
        return (
            <section>
                <form action="">
                    <h2 className='RightSection-H2Container'>
                        <label htmlFor="Name">
                            <input type="text" name="Name" id="Name" value={this.state.Name} onChange={this.handleChange} className='RightSection-H2' />
                        </label>
                    </h2>
                    <fieldset className='RightSection-Fieldset'>
                        <legend>About me</legend>
                        <p>
                            <label htmlFor="AboutMe">
                                <textarea name="AboutMe" id="AboutMe" cols="30" rows="10" value={this.state.AboutMe} onChange={this.handleChange}></textarea>
                            </label>
                        </p>
                    </fieldset>

                    <fieldset className='RightSection-Fieldset'>
                        <legend>Experience</legend>
                        {this.generateExperienceFields()}
                    </fieldset>
                    <fieldset className='RightSection-Fieldset'>
                        <legend>Education</legend>
                        {this.generateEducationFields()}
                    </fieldset>
                </form>
            </section>
        )
    }
}
export default RightSection;