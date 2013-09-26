var app = app || {};

app.ResumeJSON = Backbone.Model.extend({
	defaults: {
		name: '',
		email: '',
		education: [],
		skills: [],
		interests: [],
		profiles: []
	},
	initialize: function() {
		this.listenTo(app.Educations, 'change', this.update);
		this.listenTo(app.Employments, 'change', this.update);
		this.listenTo(app.Skills, 'change', this.update);
		this.listenTo(app.Interests, 'change', this.update);
		this.listenTo(app.Profiles, 'change', this.update);
	}
});