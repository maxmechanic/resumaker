define(['backbone',
  'jquery',
  'routers/router',
  'models/name',
  'models/email',
  'collections/educations',
  'collections/employments',
  'collections/skills',
  'collections/interests',
  'collections/profiles',
  'templates/fullResume.hbs'
], function(Backbone, $, router, Name, Email, Educations, Employments, Skills, Interests, Profiles, template) {
  var OutputView = Backbone.View.extend({

    id: '#outputView',

    template: template,


    initialize: function() {
      this.outlet = $('#outlet');
      this.listenTo(router, 'close', this.close);
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
      this.outlet.append(this.$el.empty().html(this.template(this.composite)));
      return this;
    },

    close: function() {
      this.unbind();
      this.remove();
    }
  });

  return OutputView;

});
