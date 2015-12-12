import { map } from 'lodash'
import React from 'react'

const buildEducation = (education = {}) => {
  if (!Object.keys(education).length) return null

  return (
    <ul className="verboseList" style={{'WebkitBoxSizing': 'border-box', 'MozBoxSizing': 'border-box', 'boxSizing': 'border-box', 'marginTop': '0', 'marginBottom': '10px', 'listStyle': 'none', 'fontSize': '17px', 'paddingBottom': '10px'}}>
      {
        map(education, ({school, attended, degree, major}) => (
          <li style={{'WebkitBoxSizing': 'border-box', 'MozBoxSizing': 'border-box', 'boxSizing': 'border-box', 'paddingBottom': '15px'}}>
            <h4 style={{'WebkitBoxSizing': 'border-box', 'MozBoxSizing': 'border-box', 'boxSizing': 'border-box', 'fontFamily': 'Helvetica Neue, Helvetica, Arial, sans-serif', 'fontWeight': '500', 'lineHeight': '1.1', 'marginTop': '10px', 'marginBottom': '10px', 'fontSize': '18px'}}>{degree}: {major}</h4>
            <p style={{'WebkitBoxSizing': 'border-box', 'MozBoxSizing': 'border-box', 'boxSizing': 'border-box', 'margin': '0 0 10px'}}>{school}, {attended}</p>
          </li>
        ))
      }
    </ul>
  )
}

const buildProjects = (projects = []) => {
  if (!projects.length) return null

  return (
    <ul style={{'WebkitBoxSizing': 'border-box', 'MozBoxSizing': 'border-box', 'boxSizing': 'border-box', 'marginTop': '0', 'marginBottom': '0', 'listStyle': 'none', 'fontSize': '14px', 'paddingBottom': '10px'}}>
      {projects.map(({type, url, title}) => (
        <li style={{'WebkitBoxSizing': 'border-box', 'MozBoxSizing': 'border-box', 'boxSizing': 'border-box', 'paddingBottom': '15px'}}>
          <b style={{'fontWeight': 'bold', 'WebkitBoxSizing': 'border-box', 'MozBoxSizing': 'border-box', 'boxSizing': 'border-box'}}>{type}: </b><a href="{url}" style={{'WebkitBoxSizing': 'border-box', 'MozBoxSizing': 'border-box', 'boxSizing': 'border-box', 'color': '#428bca', 'text-decoration': 'none'}}>{title}</a>
        </li>
      ))}
    </ul>
  )
}

const mapEmployment = ({position, duration, projects, employer, description}) => {
  // const projectHtml = buildProjects(projects)

  return (
    <li style={{'WebkitBoxSizing': 'border-box', 'MozBoxSizing': 'border-box', 'boxSizing': 'border-box', 'paddingBottom': '15px'}}>
      <h3 style={{'WebkitBoxSizing': 'border-box', 'MozBoxSizing': 'border-box', 'boxSizing': 'border-box', 'fontFamily': 'Helvetica Neue, Helvetica, Arial, sans-serif', 'fontWeight': '500', 'lineHeight': '1.1', 'marginTop': '20px', 'marginBottom': '10px', 'fontSize': '24px'}}>{position} <small style={{'fontSize': '14px', 'WebkitBoxSizing': 'border-box', 'MozBoxSizing': 'border-box', 'boxSizing': 'border-box', 'fontWeight': 'normal', 'lineHeight': '1', 'color': '#999999'}}>{duration}</small></h3>
      <h4 style={{'WebkitBoxSizing': 'border-box', 'MozBoxSizing': 'border-box', 'boxSizing': 'border-box', 'fontFamily': 'Helvetica Neue, Helvetica, Arial, sans-serif', 'fontWeight': '500', 'lineHeight': '1.1', 'marginTop': '10px', 'marginBottom': '10px', 'fontSize': '18px'}}>{employer}</h4>
      <p style={{'WebkitBoxSizing': 'border-box', 'MozBoxSizing': 'border-box', 'boxSizing': 'border-box', 'margin': '0 0 10px'}}>{description}</p>
    </li>
  )
}

const buildEmployment = (employment = {}) => {

  if (!Object.keys(employment).length) return null
  return (
    <ul className="verboseList" style={{'WebkitBoxSizing': 'border-box', 'MozBoxSizing': 'border-box', 'boxSizing': 'border-box', 'marginTop': '0', 'marginBottom': '10px', 'listStyle': 'none', 'fontSize': '17px', 'paddingBottom': '10px'}}>
      {
        map(employment,  mapEmployment)
      }
    </ul>
  )

}

const buildInterests = (interests = {}) => {
  if (!Object.keys(interests).length) return null

  return (
    <ul style={{'WebkitBoxSizing': 'border-box', 'MozBoxSizing': 'border-box', 'boxSizing': 'border-box', 'marginTop': '0', 'marginBottom': '10px', 'fontSize': '17px', 'paddingBottom': '10px'}}>
      {map(interests, ({interest}) => (
        <li style={{'WebkitBoxSizing': 'border-box', 'MozBoxSizing': 'border-box', 'boxSizing': 'border-box', 'paddingBottom': '3px'}}>{interest}</li>
      ))}
    </ul>
  )
}

const buildSkills = (skills = {}) => {
  if (!Object.keys(skills).length) return null

  return (
    <ul style={{'WebkitBoxSizing': 'border-box', 'MozBoxSizing': 'border-box', 'boxSizing': 'border-box', 'marginTop': '0', 'marginBottom': '10px', 'fontSize': '17px', 'paddingBottom': '10px'}}>
      {map(skills, ({skill}) => (
        <li style={{'WebkitBoxSizing': 'border-box', 'MozBoxSizing': 'border-box', 'boxSizing': 'border-box', 'paddingBottom': '3px'}}>{skill}</li>
      ))}
    </ul>
  )
}

const buildProfiles = (profiles = {}) => {
  if (!Object.keys(profiles).length) return null

  return (
    <ul className="profileList" style={{'WebkitBoxSizing': 'border-box', 'MozBoxSizing': 'border-box', 'boxSizing': 'border-box', 'marginTop': '0', 'marginBottom': '10px', 'fontSize': '17px', 'paddingBottom': '10px'}}>
      {map(profiles, ({url, title}) => (
        <li style={{'WebkitBoxSizing': 'border-box', 'MozBoxSizing': 'border-box', 'boxSizing': 'border-box', 'paddingBottom': '3px'}}><a href="{url}" style={{'WebkitBoxSizing': 'border-box', 'MozBoxSizing': 'border-box', 'boxSizing': 'border-box', 'color': '#428bca', 'text-decoration': 'none'}}>{title}</a></li>
      ))}
    </ul>
  )
}

const fullResume = ({resume}) => {
  return (

      <div className="container" style={{'WebkitBoxSizing': 'border-box', 'MozBoxSizing': 'border-box', 'boxSizing': 'border-box', 'marginRight': 'auto', 'marginLeft': 'auto', 'paddingLeft': '15px', 'paddingRight': '15px'}}>
        <div className="page-header" style={{'WebkitBoxSizing': 'border-box', 'MozBoxSizing': 'border-box', 'boxSizing': 'border-box', 'paddingBottom': '9px', 'margin': '40px 0 20px', 'borderBottom': '1px solid #eeeeee'}}>
          <h1 style={{'fontSize': '36px', 'margin': '0.67em 0', 'WebkitBoxSizing': 'border-box', 'MozBoxSizing': 'border-box', 'boxSizing': 'border-box', 'fontFamily': 'Helvetica Neue, Helvetica, Arial, sans-serif', 'fontWeight': '500', 'lineHeight': '1.1', 'marginTop': '20px', 'marginBottom': '10px'}}>{resume.name} <small style={{'fontSize': '24px', 'WebkitBoxSizing': 'border-box', 'MozBoxSizing': 'border-box', 'boxSizing': 'border-box', 'fontWeight': 'normal', 'lineHeight': '1', 'color': '#999999'}}>{resume.email}</small></h1>
        </div>

        <div className="span10" style={{'WebkitBoxSizing': 'border-box', 'MozBoxSizing': 'border-box', 'boxSizing': 'border-box'}}>
          <h2 style={{'WebkitBoxSizing': 'border-box', 'MozBoxSizing': 'border-box', 'boxSizing': 'border-box', 'fontFamily': 'Helvetica Neue, Helvetica, Arial, sans-serif', 'fontWeight': '500', 'lineHeight': '1.1', 'marginTop': '20px', 'marginBottom': '10px', 'fontSize': '30px'}}>Education</h2>
          {buildEducation(resume.education)}

          <h2 style={{'WebkitBoxSizing': 'border-box', 'MozBoxSizing': 'border-box', 'boxSizing': 'border-box', 'fontFamily': 'Helvetica Neue, Helvetica, Arial, sans-serif', 'fontWeight': '500', 'lineHeight': '1.1', 'marginTop': '20px', 'marginBottom': '10px', 'fontSize': '30px'}}>Employment</h2>
          {buildEmployment(resume.employment)}

          <h2 style={{'WebkitBoxSizing': 'border-box', 'MozBoxSizing': 'border-box', 'boxSizing': 'border-box', 'fontFamily': 'Helvetica Neue, Helvetica, Arial, sans-serif', 'fontWeight': '500', 'lineHeight': '1.1', 'marginTop': '20px', 'marginBottom': '10px', 'fontSize': '30px'}}>Interests</h2>
          {buildInterests(resume.interests)}


          <h2 style={{'WebkitBoxSizing': 'border-box', 'MozBoxSizing': 'border-box', 'boxSizing': 'border-box', 'fontFamily': 'Helvetica Neue, Helvetica, Arial, sans-serif', 'fontWeight': '500', 'lineHeight': '1.1', 'marginTop': '20px', 'marginBottom': '10px', 'fontSize': '30px'}}>Skills</h2>
          {buildSkills(resume.skills)}

          <h2 style={{'WebkitBoxSizing': 'border-box', 'MozBoxSizing': 'border-box', 'boxSizing': 'border-box', 'fontFamily': 'Helvetica Neue, Helvetica, Arial, sans-serif', 'fontWeight': '500', 'lineHeight': '1.1', 'marginTop': '20px', 'marginBottom': '10px', 'fontSize': '30px'}}>Profiles</h2>
          {buildProfiles(resume.profiles)}
        </div>
      </div>

  )
}

export default fullResume