import React from 'react';
import resumeStructures from './resume-structures';
import ResumeTable from './resume-table';
import { Link } from 'react-router';
import { capitalize } from 'lodash';
import serializeForm from 'form-serialize';

let Build = React.createClass({
  getInitialState() {
    return {
      currentForm: false
    };
  },

  handleSubmit(type, target) {
    const data = serializeForm(target, { hash: true });
    this.props.actions.addItem(type.toUpperCase(), data);
    this.props.history.pushState(null, '/build');
  },

  newForm(type) {
    this.setState({currentForm: type})
  },

  render() {
    const { resume, children } = this.props;
    const { handleSubmit } = this;

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
          {React.Children.map(children, c => React.cloneElement(c, { handleSubmit }))}
        </div>
        <div id="resume">
          {resumeStructures.map(([title, attributes]) =>
            <ResumeTable key={title} title={title} attributes={attributes} items={resume[title]} />
          )}
        </div>
      </div>
    );
  }
});

export default Build;
