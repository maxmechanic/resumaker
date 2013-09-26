var app = app || {};

var EmploymentsList = app.ResumeCollection.extend({
  model: app.Employment
});

app.Employments = new EmploymentsList();