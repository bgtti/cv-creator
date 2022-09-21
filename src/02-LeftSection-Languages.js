import React, { Component } from 'react';
import './02-LeftSection.css';

class LeftSectionLanguages extends Component {
    constructor(props) {
        super(props);
        this.colorDivLevel = this.colorDivLevel.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
    }
    colorDivLevel(levelProp, levelThis) {
        let theLevel = parseInt(levelProp);
        if ((theLevel === levelThis) || (theLevel > levelThis)) {
            return "LeftSection-LangLevelColoured"
        } else {
            return "LeftSection-LangLevelNotColoured" //used?
        }
    }
    handleValueChange(e) {
        this.props.handleLanguageChange(e)
    }
    render() {
        return (
            <div className='LeftSection-Margin0 LeftSection-LanguageSubContainer'>
                <label htmlFor={`Language${this.props.langIndex}Label`}>
                    <input type="text" name={`Language${this.props.langIndex}Label`} id={`Language${this.props.langIndex}Label`} value={this.props.value} placeholder="Language name" className='LeftSection-LanguageName' data-langindex={this.props.langIndex} data-langid="langName" onChange={this.handleValueChange} />
                </label>
                <label htmlFor={`Language${this.props.langIndex}Level`}>
                    <div name={`Language${this.props.langIndex}Level`} id={`Language${this.props.langIndex}Level`} className="LeftSection-LanguageRating">
                        <div name={`Language${this.props.langIndex}Level1`} data-langlevel="1" data-langindex={this.props.langIndex} data-langid="langLevel" className={this.colorDivLevel(this.props.level, 1)} onClick={this.handleValueChange}></div>
                        <div name={`Language${this.props.langIndex}Level2`} data-langlevel="2" data-langindex={this.props.langIndex} data-langid="langLevel" className={this.colorDivLevel(this.props.level, 2)} onClick={this.handleValueChange}></div>
                        <div name={`Language${this.props.langIndex}Level3`} data-langlevel="3" data-langindex={this.props.langIndex} data-langid="langLevel" className={this.colorDivLevel(this.props.level, 3)} onClick={this.handleValueChange}></div>
                        <div name={`Language${this.props.langIndex}Level4`} data-langlevel="4" data-langindex={this.props.langIndex} data-langid="langLevel" className={this.colorDivLevel(this.props.level, 4)} onClick={this.handleValueChange}></div>
                        <div name={`Language${this.props.langIndex}Level5`} data-langlevel="5" data-langindex={this.props.langIndex} data-langid="langLevel" className={this.colorDivLevel(this.props.level, 5)} onClick={this.handleValueChange}></div>
                        <div name={`Language${this.props.langIndex}Level6`} data-langlevel="6" data-langindex={this.props.langIndex} data-langid="langLevel" className={this.colorDivLevel(this.props.level, 6)} onClick={this.handleValueChange}></div>
                    </div>
                </label>
            </div>
        )
    }
}
export default LeftSectionLanguages;