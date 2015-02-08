import React from 'react';
import {Cursor} from 'react-cursor';
import Build from './build';
import Html from './html';
import Json from './json';

var views = {
  build: Build,
  html: Html,
  json: Json
};

let App = React.createClass({
  getInitialState() {
    return {
      currentView: 'build',
      resume: {
        name,
        email: '',
        education: [],
        employment: [],
        interests: [],
        skills: [],
        profiles: []
      }
    };
  },

  navigateTo(currentView) {
    this.setState({currentView});
  },

  render() {
    let cursor = Cursor.build(this);
    let {currentView} = this.state;
    let View = views[currentView];

    return (
      <div className="container">
        <div className="text-right">
            <a href="#"><button type="button" className="btn btn-default">export JSON</button></a>
            <a href="#"><button type="button" className="btn btn-default">export HTML</button></a>
        </div>
        <h1>Resumaker</h1>
        <nav id="topNav" className="nav nav-tabs">
          <li className={currentView === 'build' ? 'active' : ''} ><a onClick={this.navigateTo.bind(this, 'build')}>Build Resume</a></li>
          <li className={currentView === 'html' ? 'active' : ''} ><a onClick={this.navigateTo.bind(this, 'html')}>HTML Output</a></li>
          <li className={currentView === 'json' ? 'active' : ''} ><a onClick={this.navigateTo.bind(this, 'json')}>JSON Output</a></li>
        </nav>
        <View cursor={cursor.refine('resume')} />
      </div>

    );
  }
})

React.render(<App />, document.getElementById('app'));