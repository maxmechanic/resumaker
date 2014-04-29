define(['views/resumeItem'], function(ResumeItemView) {
  var ContactItemView = ResumeItemView.extend({
    deleteModel: function() {
      this.model.set(this.model.defaults);
      this.close();
    }
  });

  return ContactItemView;
});


