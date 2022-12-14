import React, { Component } from 'react';
import './04-Settings.css';
import Logo from './Images/Logo.png'

class Settings extends Component {
    constructor(props) {
        super(props);
        this.printPDF = this.printPDF.bind(this);
        this.changeSettings = this.changeSettings.bind(this);
    }
    printPDF(e) {
        e.preventDefault();
        this.props.pdfPrint()
    }
    changeSettings(e) {
        this.props.changeSettings(e);
    }
    render() {
        return (
            <div className='Settings'>
                <div className='Settings-TitleAndSub'>
                    <div className='Settings-TitleAndSub-Logo'>
                        <img src={Logo} alt="LogoCVMaker" />
                        <h1 className='Settings-Title'>CV <span>Maker</span></h1>
                    </div>

                    <h2 className='Settings-SubTitle'>Your resume made easy</h2>
                </div>
                <p className='Settings-P'>You can edit the template bellow and make it your own. Adjust the number of fields under 'Settings' to update the template accordingly. The text can be edited by clicking on the relevant field on the document itself.</p>
                <h3 className='Settings-H3'>Settings:</h3>
                <form action="">
                    <fieldset className='Settings-Fieldset'>
                        <legend>Left Section</legend>
                        <label htmlFor="ImageSetting"> Image link:
                            <input type="text" name="ImageSetting" id="ImageSetting" value={this.props.ImageSetting} onChange={e => this.changeSettings(e)} className='Settings-InputField' />
                        </label>
                        <label htmlFor="LanguageSetting"> Number of language fields:
                            <select name="LanguageSetting" id="LanguageSetting" defaultValue="3" onChange={e => this.changeSettings(e)}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </label>
                        <label htmlFor="SkillsSetting"> Number of skill fields:
                            <select name="SkillsSetting" id="SkillsSetting" defaultValue="5" onChange={e => this.changeSettings(e)}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </label>
                        <label htmlFor="ProfileSetting"> Number of profile paragraphs:
                            <select name="ProfileSetting" id="ProfileSetting" defaultValue="3" onChange={e => this.changeSettings(e)}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </label>
                    </fieldset>

                    <fieldset className='Settings-Fieldset'>
                        <legend>Right Section</legend>
                        <label htmlFor="ExperienceSetting"> Number of experience fields:
                            <select name="ExperienceSetting" id="ExperienceSetting" defaultValue="3" onChange={e => this.changeSettings(e)}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </label>
                        <label htmlFor="EducationSetting"> Number of education fields:
                            <select name="EducationSetting" id="EducationSetting" defaultValue="3" onChange={e => this.changeSettings(e)}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </label>
                    </fieldset>
                    <button className='Settings-Btn' onClick={this.printPDF}>Save CV as PDF</button>
                </form>
                <h3 className='Settings-H3'>Editable CV Template:</h3>
            </div>
        )
    }
}
export default Settings;