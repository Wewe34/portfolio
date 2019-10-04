import React, {Component} from 'react'
import Nav from "./Nav"

class Contact extends Component {
    render () {
        return (
            <div>
                <Nav />
                <img id="flyingparrot-contact" src="/images/accessory.png" alt="about-flying"/>
                <img id="flyingparrot-contact1" src="/images/accessory.png" alt="about-flying1"/>
                <form id="gform"
                    method="POST"
                    data-email="cassandra34terry@gmail.com"
                    action="https://script.google.com/macros/s/AKfycbzFiprgGm45xX5FTB6kfZXEgXkucbdHIipy2JV98Q/exec">
                    <div id="contact-name">
                    Name:<br />
                    <input className="contact-input" type="text" name="name" placeholder="First and Last Name" />
                    <br />
                    </div>
                    <br />
                    Message: <br />
                    <textarea className="contact-input" name="message" id="message" cols="35" rows="10" placeholder="Type message..."></textarea>
                    <br />
                    <br />
                    Email: <br />
                    <input className="contact-input" type="text" name="email"
                    size="60"
                    placeholder="your.email@email.com" /> <br />
                    <br />

                    <button id="submit-button" type="submit" value="Submit">
                    Submit
                    </button>
                </form>
                <div style={{display: "none"}} className="thankyou_message">
                    <h2>Thank you! She will get back to you soon!
                    </h2>
                </div>
            </div>
        )
    }
}

export default Contact;