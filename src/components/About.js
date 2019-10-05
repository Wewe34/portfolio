import React, {Component} from 'react'
import Nav from "./Nav"

class About extends Component {
    render () {
        return (
            <div id="about-container">
                <Nav />
                <img id="flyingparrot-about" src="/images/accessory.png" alt="about-flying"/>
                <div id="about">
                    <img id="aboutpic" src="/images/aboutpic.JPEG" alt="about pic"/>
                    <div id="aboutinfo-container">
                    <p id="aboutinfo">Hello! <br /><br /> I'm Cassandra. <br /><br /> I'm a fullstack software developer residing
                        in a small town in Kentucky. If I was an animal, I would be a parrot for it's
                        bright, vibrant colors and problem-solving abilities. I've always had a love
                        for logical-thinking
                        and problem-solving that eventually led to the discovery of coding. Furthermore, I
                        recently completed a rigorous software development school in Chicago, IL.
                        <br />
                        <br />

                        <a href="https://www.linkedin.com/in/cassandraterry/"><img className="socialmedia" src="/images/linkedin.png" alt="linkedin"/></a>
                        <a href="https://github.com/Wewe34/"><img className="socialmedia" src="/images/github.png" alt="github"/></a>
                        <a href="mailto:cassandra34terry@gmail.com?Subject=Hi%20Cassandra." target="_top"><img className="socialmedia" src="/images/email.png" alt="email"/></a>
                    </p>



                    </div>

                </div>
            </div>

        )
    }
}

export default About;