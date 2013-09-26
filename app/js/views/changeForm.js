var app = app || {};

app.ChangeFormView = Backbone.View.extend({

id: '#form',

    events: {
        'submit form': 'submitForm'
    },

    template: templates['changeForm.hbs'],

    initialize: function() {},

    render: function() {
        var attributes = _.pairs(this.model.toJSON());
        this.$el.html(this.template({attributes: attributes}));

        $('#buildForm').html(this.$el);

        return this;
    },

    submitForm: function(e) {
        e.preventDefault();

        var formData = $('form').serializeArray();
        var modelData = {};

        for (var i = 0; i < formData.length; i++) {
            modelData[formData[i].name] = formData[i].value;
        }

        this.model.set(modelData);

        this.close();

    },

    close: function() {
        this.trigger('close'); //let navigation-related views handle active classes etc
        this.unbind();
        this.remove();
    }

});