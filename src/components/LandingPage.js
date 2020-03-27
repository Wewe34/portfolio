import React, {Component} from 'react'
import {Link} from "react-router-dom"
import Nav from "./Nav"

class LandingPage extends Component {
    render () {
        return (
            <div id="landing-container">
                <Nav />
                <div id="home">
                    <div id="top-container-landing">
                        <div id="about-me-landing">
                            <h2>Hi. I'm Cassandra.</h2>
                            <img id="aboutpiclanding" src="/images/aboutpic.JPEG" alt="about pic"/>
                            <p>I'm a passionate Software Developer
                            with a love for solving problems and expressing my creativity.
                            Check out my projects and feel free to contact me. </p>
                            <br></br>
                            <div id="contactme">
                            <a href="https://www.linkedin.com/in/cassandraterry/"><img className="socialmedia" src="/images/linkedin.png" alt="linkedin"/></a>
                            <a href="https://github.com/Wewe34/"><img className="socialmedia" src="/images/github.png" alt="github"/></a>
                            <a href="mailto:cassandra34terry@gmail.com?Subject=Hi%20Cassandra." target="_top"><img className="socialmedia" src="/images/email.png" alt="email"/></a>
                            </div>
                        </div>
                        <div id="about-pic-landing">
                        </div>
                    </div>
                    <div id="bottom-container-landing">

                        <div id="projects-landing">
                        <Link to="/projects">
                            <p>Projects</p>
                        </Link>
                        </div>

                        <div id="skills-landing">
                        <Link to="/skills">
                            <p>Skills</p>
                        </Link>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default LandingPage;