define(['models/resumeItem'], function(ResumeItemModel) {

  var Employment = ResumeItemModel.extend({
    defaults: {
      position: '',
      employer: '',
      description: '',
      duration: ''
    }
  });

  return Employment;

});