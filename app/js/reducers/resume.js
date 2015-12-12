import { createReducer } from './utils';
import { omit, uniqueId, isString } from 'lodash';

import {
  EDIT_NAME,
  EDIT_EMAIL,

  ADD_EDUCATION,
  REMOVE_EDUCATION,
  EDIT_EDUCATION,

  ADD_EMPLOYMENT,
  REMOVE_EMPLOYMENT,
  EDIT_EMPLOYMENT,

  ADD_SKILL,
  REMOVE_SKILL,
  EDIT_SKILL,

  ADD_INTEREST,
  REMOVE_INTEREST,
  EDIT_INTEREST,

  ADD_PROFILE,
  REMOVE_PROFILE,
  EDIT_PROFILE,
} from '../actions';

const makeAddReducer = (type) =>
  (state, {payload}) => {
    const newTypeState = {...state[type], [uniqueId()]: payload};
    return {...state, [type]: newTypeState};
  };

const makeEditReducer = (type) =>
  (state, {payload}) => {
    const {id, ...data} = payload;

    if (isString(state[type])) {
      return {...state, [type]: data[type]};
    } else {
      const newTypeState = {...state[type], [id]: data};
      return {...state, [type]: newTypeState};
    }
  }

const makeRemoveReducer = (type) =>
  (state, {payload: id}) => {

    const typeState = state[type];
    newTypeState = omit(typeState, id)

    return {...state, [type]: newTypeState};
  };

const reducers = {
  ADD_EDUCATION: makeAddReducer('education'),
  ADD_EMPLOYMENT: makeAddReducer('employment'),
  ADD_SKILL: makeAddReducer('skill'),
  ADD_INTEREST: makeAddReducer('interest'),
  ADD_PROFILE: makeAddReducer('profile'),

  EDIT_NAME: makeEditReducer('name'),
  EDIT_EMAIL: makeEditReducer('email'),
  EDIT_EDUCATION: makeEditReducer('education'),
  EDIT_EMPLOYMENT: makeEditReducer('employment'),
  EDIT_SKILL: makeEditReducer('skill'),
  EDIT_INTEREST: makeEditReducer('interest'),
  EDIT_PROFILE: makeEditReducer('profile'),

  REMOVE_EDUCATION: makeAddReducer('education'),
  REMOVE_EMPLOYMENT: makeAddReducer('employment'),
  REMOVE_SKILL: makeAddReducer('skill'),
  REMOVE_INTEREST: makeAddReducer('interest'),
  REMOVE_PROFILE: makeAddReducer('profile')
};

const initialState = {
  name: '',
  email: '',
  education: {},
  employment: {},
  interests: {},
  skills: {},
  profiles: {}
};

export default createReducer(initialState, reducers);