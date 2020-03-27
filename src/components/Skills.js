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
                            <div className="skills-list">
                                <div className="skills-info">
                                    <div className="skills-dynamic">
                                        <div className="skills-wrap">
                                            <img className="skills-img" src="/images/skills/javascript.png" alt="javascript"></img>
                                            <p className="mobile-resp">Javascript</p>
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
                                    <p className="info-desc">To add styling and interactivity to webpages</p>
                                </div>
                                <br></br>
                                <div className="skills-info">
                                    <div className="skills-dynamic">
                                        <div className="skills-wrap">
                                            <img className="skills-img" src="/images/skills/react.png" alt="react"></img>
                                            <p className="mobile-resp">React</p>
                                        </div>
                                        <div className="skills-wrap">
                                            <img className="skills-img" src="/images/skills/redux.png" alt="redux"></img>
                                            <p className="mobile-resp">Redux</p>
                                        </div>
                                    </div>
                                    <p className="info-desc">To allow for single page application and state management</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div id="backend">
                        <div className="skills-pro">
                            <div className="skills-list">
                                <div>
                                    <div className="skills-info">
                                        <div className="skills-dynamic">
                                            <div className="skills-wrap">
                                                <img className="skills-img" src="/images/skills/sql.png" alt="sql"></img>
                                                <p className="mobile-resp">SQL</p>
                                            </div>
                                            <div className="skills-wrap">
                                                <img className="skills-img" src="/images/skills/node.png" alt="node"></img>
                                                <p className="mobile-resp">Node.js</p>
                                            </div>
                                        </div>
                                        <p className="info-desc">SQL to access and modify our database and Node to run Javascript outside the browser</p>
                                    </div>
                                </div>
                                <br></br>
                                <div>
                                    <div className="skills-info">
                                        <div className="skills-dynamic">
                                            <div className="skills-wrap">
                                                <img className="skills-img" src="/images/skills/git.png" alt="git"></img>
                                                <p className="mobile-resp">git</p>
                                            </div>
                                        </div>
                                        <p className="info-desc">Version control system</p>
                                    </div>
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