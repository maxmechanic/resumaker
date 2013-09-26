var app = app || {};

var Email = app.ResumeItemModel.extend({
  defaults: {
    email: ''
  }
});

app.Email = new Email();