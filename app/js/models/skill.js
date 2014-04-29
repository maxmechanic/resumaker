define(['models/resumeItem'], function(ResumeItemModel) {
  return ResumeItemModel.extend({
    defaults: {
      skill: ''
    }
  });
});
