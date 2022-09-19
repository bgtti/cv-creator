import React, { Component } from 'react';
import './03-RightSection.css';

class RightSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: "SAMANTHA BEE",
            AboutMe: "Diligent software designer with 3+ years of experience in business application development. Eager to design innovative solutions and user-friendly interfaces clients will love. Eager to join a new team of professionals and develop cutting-edge solutions with the newest available technology.",
            //Experience
            //Education
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
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
                        <div>
                            <div>
                                <div>X</div>
                                <div>|</div>
                            </div>
                            <div>
                                <label htmlFor="Company1">
                                    <input type="text" name="Company1" id="Company1" placeholder="AwesomeDees Ltd" />
                                </label>
                                <label htmlFor="Year1">
                                    <input type="text" name="Year1" id="Year1" placeholder="2015 - present" />
                                </label>
                                <p>
                                    <label htmlFor="JobDescription1">
                                        <textarea name="JobDescription1" id="JobDescription1" cols="30" rows="10" placeholder="Member of Agile Scrum developing team, I architect and design software solution for a wide range of clients. Implementing and negotiating changes with customers are part of my routine, and I enjoy taking ownership of the architecture of applications built for a global customer base. "></textarea>
                                    </label>
                                </p>

                            </div>
                        </div>

                        <div>
                            <div>
                                <div>X</div>
                                <div>|</div>
                            </div>
                            <div>
                                <label htmlFor="Company2">
                                    <input type="text" name="Company2" id="Company2" placeholder="Le Design Ldt" />
                                </label>
                                <label htmlFor="Year2">
                                    <input type="text" name="Year2" id="Year2" placeholder="2019 - 2020" />
                                </label>
                                <p>
                                    <label htmlFor="JobDescription2">
                                        <textarea name="JobDescription2" id="JobDescription2" cols="30" rows="10" placeholder="During my internship in software design and development I used modern JavaScript libraries to create optimal solutions. The constant use of Figma, Canva, and Photoshop boosted my design skills, and I enjoyed wireframing beautiful smart websites to international clients. "></textarea>
                                    </label>
                                </p>

                            </div>
                        </div>

                    </fieldset>
                    <fieldset className='RightSection-Fieldset'>
                        <legend>Education</legend>
                        <div>
                            <div>
                                <div>X</div>
                                <div>|</div>
                            </div>
                            <div>
                                <label htmlFor="Education1">
                                    <input type="text" name="Education1" id="Education1" placeholder="Sissus University" />
                                </label>
                                <label htmlFor="EducationYear1">
                                    <input type="text" name="EducationYear1" id="EducationYear1" placeholder="2015 - 2019" />
                                </label>
                                <p>
                                    <label htmlFor="EducationDescription1">
                                        <textarea name="EducationDescription1" id="EducationDescription1" cols="30" rows="10" placeholder="Bsc in Computer Science, online degree."></textarea>
                                    </label>
                                </p>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        )
    }
}
export default RightSection;