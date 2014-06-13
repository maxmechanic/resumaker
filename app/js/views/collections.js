define(['backbone', 'underscore', 'jquery', 'views/resumeItem', 'templates/resumeTable.hbs'], function(Backbone, _, $, ResumeItemView, template) {
	var CollectionsView = Backbone.View.extend({
		events: {},
		tagName: 'table',
		className: 'table table-striped',
		template: template,

		initialize: function() {
			this.listenTo(this.collection, 'add', this.add);

			this.render();
			this.renderAll();
			this.children = [];
		},

		renderAll: function() {
			var fragment = new DocumentFragment;

			this.collection.forEach(function(model) {
				var view = new ResumeItemView({model: model});
				fragment.appendChild(view.render().el);
			})

			this.$el.html(fragment);
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
