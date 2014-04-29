define(['backbone', 'underscore', 'jquery', 'views/resumeItem'], function(Backbone, _, $, ResumeItemView) {
	var CollectionsView = Backbone.View.extend({
		events: {},
		tagName: 'table',
		className: 'table table-striped',
		template: templates['resumeTable.hbs'],

		initialize: function() {
			this.listenTo(this.collection, 'add', this.add);

			this.render();
			this.renderAll();
			this.children = [];
		},

		renderAll: function() {
			var el = this.$el
			this.collection.forEach(function(model) {
				var view = new ResumeItemView({model: model});
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
			var view = new ResumeItemView({model: model});
			this.$el.append(view.render().el);
			this.children.push(view);
		},

		close: function() {
			_.each(this.children, function(view) {
				view.unbind();
				view.remove();
			});

			this.unbind();
			this.remove();
		}
	});

	return CollectionsView;

})
