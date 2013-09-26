var app = app || {};

app.EmploymentFormView = app.FormView.extend({
	initialize: function() {
		this.divId = 'empForm';
		this.template = templates['employmentForm.hbs'];
		this.model = app.Employment;
		this.collection = app.Employments;
	}

});