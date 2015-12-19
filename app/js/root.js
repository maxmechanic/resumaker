import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Redirect } from 'react-router';
import { syncReduxAndRouter } from 'redux-simple-router';
import createHashHistory from 'history/lib/createHashHistory';
import createStore from './store';
import App from './app';
import Build from './build';
import Json from './json';
import Html from './html';
import forms from './forms';

const history = createHashHistory();
const store = createStore({});

syncReduxAndRouter(history, store);

function mapFormsToRoutes({section, component}) {
  return <Route key={section} path={section} component={component} />;
}

ReactDOM.render((
  <Provider store={store} >
    <Router history={history}>
      <Redirect from="/" to="/build" />
      <Route path="/" component={App}>
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