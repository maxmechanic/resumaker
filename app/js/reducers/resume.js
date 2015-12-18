import { createReducer } from './utils';
import { omit, uniqueId, isString } from 'lodash';

import actions from '../actions';

const makeAddReducer = (type) =>
  (state, {payload}) => {
    const newTypeState = {...state[type], [uniqueId()]: {value: payload}};
    return {...state, [type]: newTypeState};
  };

const makeToggleEditReducer = (type, editing) =>
  (state, {payload: id}) => {
    const typeState = state[type];
    const editingObj = id
      ? {...typeState[id], editing}
      : {...typeState, editing};

    const newTypeState = id
      ? {...state[type], [id]: editingObj}
      : {...state[type], ...editingObj};

    return {...state, [type]: newTypeState};
  };

const makeBeginEditReducer = (type) =>
  (state, {payload: id}) => {
    const typeState = state[type];
    const editingObj = {...typeState[id], editing: true};
    const newTypeState = {...state[type], [id]: editingObj};

    return {...state, [type]: newTypeState};
  };

const makeEditReducer = (type) =>
  (state, {payload}) => {
    const {id, ...data} = payload;

    if (isString(state[type].value)) {
      return {...state, [type]: {value: data[type]}};
    } else {
      const newTypeState = {...state[type], [id]: {value: data}};
      return {...state, [type]: newTypeState};
    }
  }

const makeRemoveReducer = (type) =>
  (state, {payload: id}) => {

    const typeState = state[type];
    const newTypeState = omit(typeState, id);

    return {...state, [type]: newTypeState};
  };

const reducers = {
  [actions.ADD_EDUCATION]: makeAddReducer('education'),
  [actions.ADD_EMPLOYMENT]: makeAddReducer('employment'),
  [actions.ADD_SKILL]: makeAddReducer('skill'),
  [actions.ADD_INTEREST]: makeAddReducer('interest'),
  [actions.ADD_PROFILE]: makeAddReducer('profile'),

  [actions.EDIT_NAME]: makeEditReducer('name'),
  [actions.EDIT_EMAIL]: makeEditReducer('email'),
  [actions.EDIT_EDUCATION]: makeEditReducer('education'),
  [actions.EDIT_EMPLOYMENT]: makeEditReducer('employment'),
  [actions.EDIT_SKILL]: makeEditReducer('skill'),
  [actions.EDIT_INTEREST]: makeEditReducer('interest'),
  [actions.EDIT_PROFILE]: makeEditReducer('profile'),

  [actions.BEGIN_EDIT_NAME]: makeToggleEditReducer('name', true),
  [actions.END_EDIT_NAME]: makeToggleEditReducer('name', false),

  [actions.BEGIN_EDIT_EMAIL]: makeToggleEditReducer('email', true),
  [actions.END_EDIT_EMAIL]: makeToggleEditReducer('email', false),

  [actions.BEGIN_EDIT_EDUCATION]: makeToggleEditReducer('education', true),
  [actions.END_EDIT_EDUCATION]: makeToggleEditReducer('education', false),

  [actions.BEGIN_EDIT_EMPLOYMENT]: makeToggleEditReducer('employment', true),
  [actions.END_EDIT_EMPLOYMENT]: makeToggleEditReducer('employment', false),

  [actions.BEGIN_EDIT_SKILL]: makeToggleEditReducer('skill', true),
  [actions.END_EDIT_SKILL]: makeToggleEditReducer('skill', false),

  [actions.BEGIN_EDIT_INTEREST]: makeToggleEditReducer('interest', true),
  [actions.END_EDIT_INTEREST]: makeToggleEditReducer('interest', false),

  [actions.BEGIN_EDIT_PROFILE]: makeToggleEditReducer('profile', true),
  [actions.END_EDIT_PROFILE]: makeToggleEditReducer('profile', false),


  [actions.REMOVE_EDUCATION]: makeRemoveReducer('education'),
  [actions.REMOVE_EMPLOYMENT]: makeRemoveReducer('employment'),
  [actions.REMOVE_SKILL]: makeRemoveReducer('skill'),
  [actions.REMOVE_INTEREST]: makeRemoveReducer('interest'),
  [actions.REMOVE_PROFILE]: makeRemoveReducer('profile')
};

const initialState = {
  name: {value: ''},
  email: {value: ''},
  education: {},
  employment: {},
  interest: {},
  skill: {},
  profile: {}
};

export default createReducer(initialState, reducers);