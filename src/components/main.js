import React from 'react'
import {Switch, Route} from 'react-router-dom'
import LandingPage from './LandingPage';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';

const Main = () => {

    return (
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/skills" component={Skills} />
        </Switch>
    )
}

export default Main;