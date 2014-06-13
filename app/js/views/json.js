define([
  'backbone',
  'jquery',
  'routers/router',
  'models/name',
  'models/email',
  'collections/employments',
  'collections/skills',
  'collections/interests',
  'collections/profiles',
  'collections/educations',
  'templates/jsonView.hbs'
   ], function(Backbone, $, Router, Name, Email, Employments, Skills, Interests, Profiles, Educations, template) {

  var JsonView = Backbone.View.extend({

    id: '#jsonView',

    template: template,

    initialize: function() {
      this.listenTo(Router, 'close', this.close);

      this.composite = {
        name: Name.toJSON().name || '',
        email: Email.toJSON().email || '',
        education: Educations.toJSON(),
        employment: Employments.toJSON(),
        skills: Skills.toJSON(),
        interests: Interests.toJSON(),
        profiles: Profiles.toJSON()
      };

    },

    render: function() {
      $('#outlet').append(this.$el.html(this.template({data: this.composite} || '')));
      return this;
    },

    close: function() {
      this.remove();
      this.unbind();
    }
  });

  return JsonView;
});

