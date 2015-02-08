import React from 'react';

let Html = React.createClass({
  render() {
    let {education, employment, name, email, skills, interests, profiles} = this.props.cursor.value;

    if (name || email) {
      var header = (
        <div className="page-header">
          <h1>{{name}} <small>{{email}}</small></h1>
        </div>
      );
    }

    if (education.length) {
      var edHeader = <h2>Education</h2>;
      var educationEls = education.map((e) => {
        let {degree, major, school, attended} = e;
        return (<li>
          <h4>{degree}: {major}</h4>
          <p>{school}, {attended}</p>
        </li>);
      });

      var educationHtml =
        (<ul className="verboseList">
            {educationEls}
        </ul>)
    }

    if (employment.length) {
      var emHeader = <h2>Employment</h2>;
      var employmentEls = employment.map((e) => {
        let {position, duration, employer, description} = e;
        if (e.projects) {
          var projectsHtml = e.projects.map((p) => {
            let {type, title, url} = p;

            return (<li>
              <b>{type}: </b><a href={url}>{title}</a>
            </li>)
          });
        }


        return (<li>
          <h3>{position} <small>{duration}</small></h3>
          <h4>{employer}</h4>
          <p>{description}</p>
            <ul>
              {projectsHtml}
            </ul>
        </li>);
      });

      var employmentHtml =
        (<ul className="verboseList">
            {employmentEls}
        </ul>)
    }

    if (interests.length) {
      var inHeader =  <h2>Interests</h2>;
      var interestsHtml = interests.map((interest) => <li>{interest}</li>);
    }

    if (skills.length) {
      var skillsHeader =  <h2>Skills</h2>;
      var skillsHtml = skills.map((skill) => <li>{skill}</li>);
    }

    if (profiles.length) {
      var profilesHeader =  <h2>Profiles</h2>;
      var profilesHtml = profiles.map((profile) => {
        let {url, title} = profile;
        return <li><a href={url}>{title}</a></li>;
      });
    }

    return (

          <div className="container">
            {header}

            <div className="span10">
              {edHeader}
              {educationHtml}

              {emHeader}
              <ul className="verboseList">
                {employmentHtml}
              </ul>

              {inHeader}
              <ul>
                {interestsHtml}
              </ul>

              {skillsHeader}
              <ul>
                {skillsHtml}
              </ul>

              {profilesHeader}
              <ul className="profileList">
                {profilesHtml}
              </ul>
            </div>
          </div>
    );
  }
});

export default Html;
