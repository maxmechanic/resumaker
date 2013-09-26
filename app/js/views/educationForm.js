var app = app || {};

app.EducationFormView = app.FormView.extend({
	initialize: function() {
		this.divId = 'edForm';
		this.template = templates['educationForm.hbs'];
		this.model = app.Education;
		this.collection = app.Educations;
	}

});