import React, {Component} from 'react'
import Nav from "./Nav"

class Projects extends Component {
    render () {
        return (
            <div id="projects-container">
                <Nav />
                {/* <img id="flyingparrot-projects" src="/images/accessory.png" alt="about-flying"/> */}
                <div className="projects">
                    <img className="project-img" src="/images/mayan.png" alt="mayan-pic"/>
                    <div className="project-info">
                        <a href="https://mayan-god-attack.herokuapp.com"><p className="project-name">Mayan God Attack</p></a>
                        <p>Single player dodge and shoot game.</p>
                        <p>Sole Developer.</p>
                        <p>Tech Stack: Phaser.js and Express</p>
                    </div>
                </div>
                <div className="projects">
                    <img className="project-img" src="/images/pixalive.png" alt="pixalive-pic"/>
                    <div className="project-info">
                        <a href="https://pixalive.herokuapp.com"><p className="project-name">Pixalive</p></a>
                        <p>Multi-user, pixel art editor used to create pixel art and
                            animiations. Try your hand at it and save as a gif.</p>
                        <p>Fullstack Developer.</p>
                        <p>Tech Stack:  HTML Canvas, React Hooks and Websockets</p>
                    </div>
                </div>
                <div className="projects">
                    <img className="project-img" src="/images/home.png" alt="site-pic"/>
                    <div className="project-info">
                        <p className="project-name">Portfolio</p>
                        <p>React web application </p>
                        <p>Sole Developer.</p>
                        <p>Tech Stack:  React, HTML, CSS </p>
                    </div>
                </div>
                <div className="projects">
                    <img className="project-img" src="/images/candy.png" alt="candy-pic"/>
                    <div className="project-info">
                        <a href="https://international-candy.herokuapp.com">
                            <p className="project-name">International Candy</p></a>
                        <p>E-commerce website with Passport and OAuth integration.<br />
                             Styling not so great, but it works. :)</p>
                        <p>Fullstack Developer.</p>
                        <p>Tech Stack:  React, Redux, Express, PostgreSQL.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;