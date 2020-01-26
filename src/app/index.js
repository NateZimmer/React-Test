import React from "react";
import { render } from "react-dom";
import './css/main.css';
import Nav_Bar from './nav.js'
//var Navs = require('./nav');

class App extends React.Component {
    render() {
        return (
            <div id='App'>
                <Nav_Bar />
                <h1> This is my App</h1>
                <div>{this.props.msg}</div>
                <div>
                    
                </div>
            </div>
        );
    }

}


render(<App msg='This is a prop'/>, document.getElementById("apps"));