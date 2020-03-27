import React, {Component} from 'react'
import {Link} from "react-router-dom"

class Nav extends Component {
    render () {
        return (
                <div id="nav">
                        <Link to="/"><button id="nav-home">Home</button></Link>
                        {/* <Link to="/about"><button id="nav-about">About</button></Link> */}
                        <Link to="/projects"><button id="nav-projects">Projects</button></Link>
                        <Link to="/skills"><button id="nav-contact">Skills</button></Link>
                </div>

        )
    }
}

export default Nav;