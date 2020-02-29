import React, {Component} from 'react'
import Nav from "./Nav"

class Projects extends Component {
    render () {
        return (
            <div id="projects-container">
                <Nav />
                <div className="projects">
                <a href="https://goofy-benz-03baca.netlify.com/"><img className="project-img" src="/images/dory.png" alt="dory-pic"/></a>

                    <div className="project-info">
                        <a href="https://goofy-benz-03baca.netlify.com/"><p className="project-name">Defending Dory</p></a>
                        <p>Single player dodge game. (Desktop Only)</p>
                        <p>Sole Developer.</p>
                        <p>Technologies: Javascript, Phaser 3 (HTML5 game framework) and Express</p>
                    </div>
                </div>
                <div className="projects">
                <a href="https://pixalive.herokuapp.com"><img className="project-img" src="/images/pixalive.png" alt="pixalive-pic"/></a>

                    <div className="project-info">
                        <a href="https://pixalive.herokuapp.com"><p className="project-name">Pixalive</p></a>
                        <p>Multi-user, pixel art editor used to create pixel art and
                            animiations. Try your hand at it and save as a gif. (Desktop Only)</p>
                        <p>Fullstack Developer.</p>
                        <p>Technologies:  HTML Canvas, React Hooks and Websockets</p>
                    </div>
                </div>
                <div className="projects">
                <a href="https://cassandra-terry.herokuapp.com"><img className="project-img" src="/images/site.png" alt="site-pic"/></a>

                    <div className="project-info">
                        <a href="https://cassandra-terry.herokuapp.com"><p className="project-name">Portfolio</p></a>
                        <p>React web application </p>
                        <p>Sole Developer.</p>
                        <p>Technologies:  React, HTML, CSS </p>
                    </div>
                </div>
                <div className="projects">
                <a href="https://international-candy.herokuapp.com">
                <img className="project-img" src="/images/candy.png" alt="candy-pic"/></a>

                    <div className="project-info">
                        <a href="https://international-candy.herokuapp.com">
                            <p className="project-name">International Candy</p></a>
                        <p>E-commerce website with Passport and OAuth integration.<br />
                             Styling not so great, but it works. :) (Desktop Only)</p>
                        <p>Fullstack Developer.</p>
                        <p>Technologies:  React, Redux, Express, PostgreSQL.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;