var app = app || {};

var ProfilesList = app.ResumeCollection.extend({
  model: app.Profile
});

app.Profiles = new ProfilesList();