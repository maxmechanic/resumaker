import React from 'react';
import '../sass/main.scss';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actionCreators from './action-creators';
import { Link } from 'react-router';

const pages = [
  {to: 'build', text: 'Build Resume'},
  {to: 'output', text: 'HTML Output'},
  {to: 'json', text: 'JSON Output'}
];

let App = React.createClass({
  exportToJSON() {
    const {actions, resume} = this.props;
    actions.saveJSON(resume);
  },

  exportToHTML() {
    const {actions, resume} = this.props;
    actions.saveHTML(resume);
  },

  render() {
    const {resume, actions, children, history} = this.props;

    return (
      <div className="container">
        <div className="text-right">
            <a href="#" onClick={this.exportToJSON}><button type="button" className="btn btn-default">export JSON</button></a>
            <a href="#" onClick={this.exportToHTML}><button type="button" className="btn btn-default">export HTML</button></a>
        </div>
        <h1>Resumaker</h1>
        <nav id="topNav" className="nav nav-tabs">
          {
            pages.map(({to, text}) =>
              <li key={to} className={history.isActive(to) ? 'active' : ''} ><Link to={to}>{text}</Link></li>
            )
          }
        </nav>
        {
          React.Children.map(children, child =>
            React.cloneElement(child, {resume, actions})
          )
        }
      </div>
    );
  }
})

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(actionCreators, dispatch)});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
