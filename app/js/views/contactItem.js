var app = app || {};

app.ContactItemView = app.ResumeItemView.extend({
  deleteModel: function() {
    this.model.set(this.model.defaults);
    this.close();
  }
});
