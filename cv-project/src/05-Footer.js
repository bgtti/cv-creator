import React, { Component } from 'react';
import './05-Footer.css';
import GithubIcon from './Images/github.png';


//Icons source:
//Github icon created by Pixel perfect from https://www.flaticon.com/free-icons/github

class Footer extends Component {

    render() {
        return (
            <footer className='Footer'>
                <p>2022 by </p>
                <a href="https://github.com/bgtti"><img src={GithubIcon} alt="github repo" /></a>
            </footer>
        )
    }
}
export default Footer;