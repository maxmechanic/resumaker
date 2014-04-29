define(['models/resumeItem'], function(ResumeItemModel) {

  var Email = ResumeItemModel.extend({
    defaults: {
      email: ''
    }
  });

  return  new Email();

});