define(['models/resumeItem'], function (ResumeItemModel) {

  var Name = ResumeItemModel.extend({
    defaults: {
      name: ''
    }
  });

  return new Name();

});
