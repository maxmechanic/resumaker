import React from 'react';

let Build = React.createClass({
  getInitialState() {
    return {
      curentForm: false
    };
  },

  changeForm(type) {

  },

  newForm(type) {

  },

  render() {
    return (
      <div id="build" className="well">
        <nav className="nav nav-pills" id="buildSingleNav">
          <li><a onClick={this.changeForm.bind(this, 'name')} id="changeName">Name</a></li>
          <li><a onClick={this.changeForm.bind(this, 'email')} id="changeEmail">E-mail</a></li>
        </nav>
        <div id="singleForm">
        </div>
        <nav className="nav nav-pills" id="buildNav">
          <li><a onClick={this.newForm.bind(this, 'education')}>Education</a></li>
          <li><a onClick={this.newForm.bind(this, 'employment')}>Employment</a></li>
          <li><a onClick={this.newForm.bind(this, 'skill')}>Skill</a></li>
          <li><a onClick={this.newForm.bind(this, 'interest')}>Interest</a></li>
          <li><a onClick={this.newForm.bind(this, 'profile')}>Profile</a></li>
        </nav>
        <div id="buildForm">

        </div>
        <div id="resume">

        </div>
      </div>
    );
  }
});

export default Build;
