define(['backbone', 'templates/changeForm.hbs'], function(Backbone, template) {

    var ChangeFormView = Backbone.View.extend({

    id: '#form',

        events: {
            'submit form': 'submitForm'
        },

        template: template,

        initialize: function() {},

        render: function() {
            this.$el.html(this.template({attributes: this.model.toJSON()}));

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

    return ChangeFormView;

});

