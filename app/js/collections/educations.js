var app = app || {};

var EducationsList = app.ResumeCollection.extend({
	model: app.Education
});

app.Educations = new EducationsList();

