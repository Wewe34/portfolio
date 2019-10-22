import React, {Component} from 'react'
import Nav from "./Nav"

class Skills extends Component {
    render () {
        return (
            <div id="skills-container">
                <Nav />
                <div id="skills">
                    <div id='frontend'>
                        <div className="skills-pro">
                            <div className="skills-header-pro">
                                Frontend
                            </div>
                            <br />
                            <div className="skills-list">
                                <div className="skills-wrap">
                                    <img className="skills-img" src="/images/skills/javascript.png" alt="javascript"></img>
                                    <p className="mobile-resp">Javascript</p>
                                </div>
                                <div className="skills-wrap">
                                    <img className="skills-img" src="/images/skills/react.png" alt="react"></img>
                                    <p className="mobile-resp">React</p>
                                </div>
                                <div className="skills-wrap">
                                    <img className="skills-img" src="/images/skills/redux.png" alt="redux"></img>
                                    <p className="mobile-resp">Redux</p>
                                </div>
                                <div className="skills-wrap">
                                    <img className="skills-img" src="/images/skills/html.png" alt="html"></img>
                                    <p className="mobile-resp">HTML</p>
                                </div>
                                <div className="skills-wrap">
                                    <img className="skills-img" src="/images/skills/css.png" alt="css"></img>
                                    <p className="mobile-resp">CSS</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <br />

                    <div id="backend">
                        <div className="skills-pro">
                            <div className="skills-header-pro">
                                Backend
                            </div>
                            <br />
                            <div className="skills-list">
                                <div className="skills-wrap">
                                    <img className="skills-img" src="/images/skills/psql.png" alt="psql"></img>
                                    <p className="mobile-resp">PostgreSQL</p>
                                </div>
                                <div className="skills-wrap">
                                    <img className="skills-img" src="/images/skills/node.png" alt="node"></img>
                                    <p className="mobile-resp">Node.js</p>
                                </div>
                                <div className="skills-wrap">
                                    <img className="skills-img" src="/images/skills/git.png" alt="git"></img>
                                    <p className="mobile-resp">git</p>
                                </div>
                                <div className="skills-wrap">
                                        <img className="skills-img" src="/images/skills/java.png" alt="java"></img>
                                        <p className="mobile-resp">Java</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;