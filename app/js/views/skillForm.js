var app = app || {};

app.SkillFormView = app.FormView.extend({
	initialize: function() {
		this.divId = 'skillForm';
		this.template = templates['skillForm.hbs'];
		this.model = app.Skill;
		this.collection = app.Skills;
	}

});