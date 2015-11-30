import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { routeReducer } from 'redux-simple-router';
import rootReducer from './reducers';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
const logger = createLogger();

const middlewares = [thunk];

export default function configureStore (initialState = {}, debug = __DEV__)  {
  const storeSetup = applyMiddleware(...middlewares);

  const reducers = combineReducers({...rootReducer, routing: routeReducer});

  const store = (debug ?
    compose(storeSetup, applyMiddleware(logger))
    : storeSetup
  )(createStore)(reducers, initialState);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}