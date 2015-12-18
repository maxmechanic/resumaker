import actions from './actions';
import { saveAs } from 'browser-filesaver';
import FullResume from './full-html';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

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

export function beginEditItem(type, payload) {
  console.log(type)
  return {
    type: actions[`BEGIN_EDIT_${type}`],
    payload
  }
}

export function endEditItem(type, payload) {
  return {
    type: actions[`END_EDIT_${type}`],
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
    saveAs(blob, 'resume.json');
  }
}

export function saveHTML(resume) {
  return (dispatch, getState) => {
    const resumeMarkup = renderToStaticMarkup(<FullResume resume={resume} />);
    const blob = new Blob([resumeMarkup], {type: 'text/html'});
    saveAs(blob, 'resume.html');
  }
}