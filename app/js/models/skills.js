var app = app || {};

app.SkillsView = app.CollectionsView.extend({
	el: '#skills',
	collection: app.Skills,
	modelView: app.SkillView
});
