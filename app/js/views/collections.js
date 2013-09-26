var app = app || {};

app.CollectionsView = Backbone.View.extend({
	events: {},
	tagName: 'table',
	className: 'table table-striped',
	template: templates['resumeTable.hbs'],

	initialize: function() {
		this.listenTo(this.collection, 'add', this.add);
		this.listenTo(this.collection, 'remove', this.remove);
		this.render();
		this.renderAll();
	},

	renderAll: function() {
		var el = this.$el
		this.collection.forEach(function(model) {
			var view = new app.ResumeItemView({model: model});
			el.append(view.render().el);
		})
	},

	render: function() {
		var model = new this.collection.model();
		var headerTemplate = this.template({attributes: _.keys(model.toJSON())});
		$('#resume').append(this.$el.html(headerTemplate));
		return this;
	},

	add: function(model) {
		var view = new app.ResumeItemView({model: model});
		this.$el.append(view.render().el);
	}
});