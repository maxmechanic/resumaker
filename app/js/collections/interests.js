var app = app || {};

var InterestsList = app.ResumeCollection.extend({
  model: app.Interest
});

app.Interests = new InterestsList();