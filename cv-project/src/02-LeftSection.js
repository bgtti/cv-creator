import React, { Component } from 'react';
//import './01-CVPage.css';

class LeftSection extends Component {
    render() {
        return (
            <section>
                <img src="" alt="" />
                <h2>Contact</h2>
                <hr />
                <form action="">
                    <label htmlFor="EmailLabel">
                        <input type="text" name="EmailLabel" id="EmailLabel" placeholder="Email:" />
                    </label>
                    <label htmlFor="Email">
                        <input type="text" name="Email" id="Email" placeholder="samantha@igg.com" />
                    </label>

                    <label htmlFor="PhoneNumber"></label>
                    <input type="text" name="PhoneNumber" id="PhoneNumber" placeholder="" />
                    <label htmlFor="Address1"></label>
                    <input type="text" name="Address1" id="Address1" placeholder="" />
                    <label htmlFor="Address2"></label>
                    <input type="text" name="Address2" id="Address2" placeholder="" />
                    <label htmlFor="LinkedIn"></label>
                    <input type="text" name="LinkedIn" id="LinkedIn" placeholder="" />
                </form>
            </section>
        )
    }
}
export default LeftSection;