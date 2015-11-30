import React from 'react';
import resumeStructures from './resume-structures';
import ResumeTable from './resume-table';
import { Link } from 'react-router';
import { capitalize } from 'lodash';

let Build = React.createClass({
  getInitialState() {
    return {
      currentForm: false
    };
  },

  handleSubmit(e) {
    e.preventDefault();
    const data = serializeForm(e.target, { hash: true });
  },

  newForm(type) {
    this.setState({currentForm: type})
  },

  render() {
    const {resume, children} = this.props;

    return (
      <div id="build" className="well">
        <nav className="nav nav-pills" id="buildNav">
          {
            resumeStructures.map(([section]) =>
              <li><Link to={`/build/${section}`}>{capitalize(section)}</Link></li>
            )
          }
        </nav>
        <div id="buildForm">
          {children}
        </div>
        <div id="resume">
          {resumeStructures.map(section =>
            <ResumeTable key={section[0]} section={section} items={resume[section[0]]} />
          )}
        </div>
      </div>
    );
  }
});

export default Build;
