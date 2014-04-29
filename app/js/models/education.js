define(['models/resumeItem'], function (ResumeItemModel) {

  var Education = ResumeItemModel.extend({
    defaults: {
      degree: '',
      attended: '',
      school: '',
      major: ''
    }
  });

  return Education;

});