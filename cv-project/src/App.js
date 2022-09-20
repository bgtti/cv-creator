import React, { Component } from 'react';
import './App.css';
import CVPage from './01-CVPage.js'
import Settings from './04-Settings.js'
import Footer from './05-Footer.js'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //to be passed down to Left Section of CV
      LanguageSetting: "3",
      SkillsSetting: "3",
      ProfileSetting: "2",
      //to be passed down to Right Section of CV
      ExperienceSetting: "2",
      EducationSetting: "2"
    }
    this.generatePDF = this.generatePDF.bind(this);
    this.handleSettingsChange = this.handleSettingsChange.bind(this);
  }
  generatePDF() {
    document.querySelector('.Settings').classList.add('displayNone');
    document.querySelector('.Footer').classList.add('displayNone');
    document.querySelector('.App').classList.add('AppPrinting');
    document.querySelector('.CVPage').classList.add('CVPagePrinting');
    window.print();
    setTimeout(() => {
      document.querySelector('.Settings').classList.remove('displayNone');
      document.querySelector('.Footer').classList.remove('displayNone');
      document.querySelector('.App').classList.remove('AppPrinting');
      document.querySelector('.CVPage').classList.remove('CVPagePrinting');
    }, 100)
  }
  handleSettingsChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (
      <div className="App">
        <Settings pdfPrint={this.generatePDF} changeSettings={this.handleSettingsChange}></Settings>
        <CVPage {...this.state}></CVPage>
        <Footer></Footer>
      </div>
    )
  }
}

export default App;
