import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Redirect } from 'react-router';
import { syncReduxAndRouter } from 'redux-simple-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import createStore from './store';
import App from './app';
import Build from './build';
import Json from './json';
import Html from './html';
import forms from './forms';

const history = createBrowserHistory();
const store = createStore({});

syncReduxAndRouter(history, store);

function mapFormsToRoutes({section, component}) {
  return <Route path={section} component={component} />;
}

ReactDOM.render((
  <Provider store={store} >
    <Router history={history}>
      <Route path="/" component={App}>
        <Redirect from="" to="build" />
        <Route path="build" component={Build}>
          {
            forms.map(mapFormsToRoutes)
          }
        </Route>
        <Route path="output" component={Html}/>
        <Route path="json" component={Json}/>
      </Route>
    </Router>
  </Provider>
  ), document.getElementById('app'));