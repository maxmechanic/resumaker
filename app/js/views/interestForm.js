var app = app || {};

app.InterestFormView = app.FormView.extend({
	initialize: function() {
		this.divId = 'interestForm';
		this.template = templates['interestForm.hbs'];
		this.model = app.Interest;
		this.collection = app.Interests;
	}

});