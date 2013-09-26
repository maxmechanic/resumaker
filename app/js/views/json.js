var app = app || {};

app.JsonView = Backbone.View.extend({

  id: '#jsonView',

  template: templates['jsonView.hbs'],

  initialize: function() {
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
    $('#outlet').append(this.$el.html(this.template({data: this.composite} || '')));
    return this;
  },

  close: function() {
    this.remove();
    this.unbind();
  }
});