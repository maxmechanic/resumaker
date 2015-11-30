import actions from './actions';
import { saveAs } from 'browser-filesaver';

export function addItem(type, payload) {
  return {
    type: actions[`ADD_${type}`],
    payload
  }
}

export function removeItem(type, payload) {
  return {
    type: actions[`REMOVE_${type}`],
    payload
  }
}

export function editItem(type, payload) {
  return {
    type: actions[`EDIT_${type}`],
    payload
  }
}

export function saveJSON(resume) {
  return (dispatch, getState) => {
    const blob = new Blob([JSON.stringify(resume)], {type: 'application/json'});
    saveAs(blob, 'resume.json')
  }
}

export function saveHTML() {
  return (dispatch, getState) => {
    const {resume} = getState();
    // TODO: build react view for full resume
    // saveAs(blob, 'resume.html')
  }
}