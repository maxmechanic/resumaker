var app = app || {};

app.ContactItemsView = Backbone.View.extend({
    events: {},
    tagName: 'table',
    className: 'table',
    template: templates['resumeTable.hbs'],

    initialize: function() {
        this.listenTo(this.model, 'change', this.renderModel);
        this.view = new app.ContactItemView({model: this.model});
        this.render();
        if (!_.isEqual(this.model.toJSON(), this.model.defaults)) {
            this.renderModel();
        }

    },

    render: function() {

        var attributes = _.keys(this.model.toJSON());
        var headerTemplate = this.template({attributes: attributes });
        $('#resume').append(this.$el.html(headerTemplate));
        return this;
    },

    renderModel: function() {
        if (this.$el.children('tr').length === 0) {
            this.$el.append(this.view.render().el);
        } else {
            this.$el.children('tr').html(this.view.render().el);
        }


    },

    close: function() {
        this.view.close();
        this.unbind();
        this.remove();
    }
});