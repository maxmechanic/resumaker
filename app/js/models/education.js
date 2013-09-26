var app = app || {};

app.Education = app.ResumeItemModel.extend({
	defaults: {
		degree: '',
		attended: '',
		school: '',
		major: ''
	}
});