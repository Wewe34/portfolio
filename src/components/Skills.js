import React, {Component} from 'react'
import Nav from "./Nav"

class Skills extends Component {
    render () {
        return (
            <div id="skills-container">
                <Nav />
                <div id="skills">
                    <div className="skills-row">
                        <div className="skills-wrap">
                            <img className="skills-img" src="/images/skills/javascript.png" alt="javascript"></img>
                            <p className="mobile-resp">Javascript</p>
                            <p className="skills-info">Javascript</p>
                        </div>
                        <div className="skills-wrap">
                            <img className="skills-img" src="/images/skills/react.png" alt="react"></img>
                            <p className="mobile-resp">React</p>
                            <p className="skills-info">React</p>
                        </div>
                        <div className="skills-wrap">
                            <img className="skills-img" src="/images/skills/redux.png" alt="redux"></img>
                            <p className="mobile-resp">Redux</p>
                            <p className="skills-info">Redux</p>
                        </div>
                    </div>

                    <br />
                    <br />
                    <div className="skills-row">
                        <div className="skills-wrap">
                            <img className="skills-img" src="/images/skills/java.png" alt="java"></img>
                            <p className="mobile-resp">Java</p>
                            <p className="skills-info">Java</p>
                        </div>
                        <div className="skills-wrap">
                            <img className="skills-img" src="/images/skills/psql.png" alt="psql"></img>
                            <p className="mobile-resp">PostgreSqL</p>
                            <p className="skills-info">PostgreSQL</p>
                        </div>
                        <div className="skills-wrap">
                            <img className="skills-img" src="/images/skills/html.png" alt="html"></img>
                            <p className="mobile-resp">HTML</p>
                            <p className="skills-info">HTML</p>
                        </div>
                    </div>

                    <br />
                    <br />

                    <div className="skills-row">
                        <div className="skills-wrap">
                            <img className="skills-img" src="/images/skills/css.png" alt="css"></img>
                            <p className="mobile-resp">CSS</p>
                            <p className="skills-info">CSS</p>
                        </div>
                        <div className="skills-wrap">
                            <img className="skills-img" src="/images/skills/git.png" alt="git"></img>
                            <p className="mobile-resp">git</p>
                            <p className="skills-info">git</p>
                        </div>
                        <div className="skills-wrap">
                            <img className="skills-img" src="/images/skills/node.png" alt="node"></img>
                            <p className="mobile-resp">Node.js</p>
                            <p className="skills-info">Node.js</p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Skills;