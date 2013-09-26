var app = app || {};

app.Employment = app.ResumeItemModel.extend({
	defaults: {
		position: '',
		employer: '',
		description: '',
		duration: ''
	}
});