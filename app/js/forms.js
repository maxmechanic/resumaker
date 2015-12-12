import React from 'react';
import resumeStructures from './resume-structures';
import { capitalize } from 'lodash';

const buildForm = ([section, attributes]) => props => {

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(section, e.target);
  };

  return (
    <form onSubmit={handleSubmit}>
      {
        attributes.map(attr => (
          <div className="form-group">
            <label for={attr}>{capitalize(attr)}</label>
            <input type="text" className="form-control" name={attr} />
          </div>
        ))
      }
      <button type="submit" className="btn btn-default btn-lg btn-block">Save</button>
    </form>
  )
};

export default resumeStructures.map(r => ({section: r[0], component: buildForm(r)}));