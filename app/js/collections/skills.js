var app = app || {};

var SkillsList = app.ResumeCollection.extend({
  model: app.Skill
});

app.Skills = new SkillsList();