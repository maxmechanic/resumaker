define(['models/resumeItem'], function(ResumeItemModel) {

  var Profile = ResumeItemModel.extend({
    defaults: {
      title: '',
      url: ''
    }
  });

  return Profile;

});
