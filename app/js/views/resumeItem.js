var app = app || {};

app.ResumeItemView = Backbone.View.extend({
	tagName: 'tr',
	template: templates['tableItem.hbs'],
	events: {
		'click #edit': 'editModel',
		'click #delete': 'deleteModel',
		'click #save': 'saveModel',
		'keypress input': 'maybeSave'
	},

	initialize: function() {
		this.listenTo(this.model, 'change', this.render);
		this.listenTo(this.model, 'destroy', this.close);
		this.editTemplate = templates['inTableEdit.hbs'];
	},

	render: function() {
		this.$el.html(this.template({attributes: this.model.toJSON()}));
		return this;
	},

	editModel: function() {
		var attributePairs = _.pairs(this.model.toJSON());
		this.$el.html(this.editTemplate({attributes: attributePairs }));
		this.el.getElementsByTagName('input')[0].focus();
		return this;
	},

	deleteModel: function() {
		this.model.destroy();
	},

	maybeSave: function(e) {
		if (e.keyCode === 13) {
			this.saveModel(e);
		}
	},

	saveModel: function(e) {
		e.preventDefault();
		var inputs = this.el.getElementsByTagName('input');
		var editedModel = {};

		_.each(inputs, function(i) {
			editedModel[i.name] = i.value;
		});

		this.model.set(editedModel);

	},

	close: function() {
		this.unbind();
		this.remove();
	}
});
