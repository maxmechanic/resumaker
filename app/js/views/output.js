var app = app || {};

app.OutputView = Backbone.View.extend({

  id: '#outputView',

  template: templates['fullResume.hbs'],


  initialize: function() {
    this.outlet = $('#outlet');
    this.listenTo(app.Router, 'close', this.close);
    this.composite = {
      name: app.Name.toJSON().name || '',
      email: app.Email.toJSON().email || '',
      education: app.Educations.toJSON(),
      employment: app.Employments.toJSON(),
      skills: app.Skills.toJSON(),
      interests: app.Interests.toJSON(),
      profiles: app.Profiles.toJSON()
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