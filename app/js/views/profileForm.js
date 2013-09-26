var app = app || {};

app.ProfileFormView = app.FormView.extend({
	initialize: function() {
		this.divId = 'profileForm';
		this.template = templates['profileForm.hbs'];
		this.model = app.Profile;
		this.collection = app.Profiles;
	}

});