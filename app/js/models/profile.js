var app = app || {};

app.Profile = app.ResumeItemModel.extend({
	defaults: {
		title: '',
		url: ''
	}
});