define(['backbone', 'underscore', 'templates/tableItem.hbs', 'templates/inTableEdit.hbs'], function(Backbone, _, template, editTemplate) {
	var ResumeItemView = Backbone.View.extend({
		tagName: 'tr',
		template: template,
		events: {
			'click #edit': 'editModel',
			'click #delete': 'deleteModel',
			'click #save': 'saveModel',
			'keypress input': 'maybeSave'
		},

		initialize: function() {
			this.listenTo(this.model, 'change', this.render);
			this.listenTo(this.model, 'destroy', this.close);
			this.editTemplate = editTemplate;
		},

		render: function() {
			this.$el.html(this.template({attributes: this.model.toJSON()}));
			return this;
		},

		editModel: function() {
			this.$el.html(this.editTemplate({attributes: this.model.toJSON() }));
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

			if (_.isEqual(editedModel, this.model.toJSON())) {
				this.render();
			}
		},

		close: function() {
			this.unbind();
			this.remove();
		}
	});

	return ResumeItemView;

});

