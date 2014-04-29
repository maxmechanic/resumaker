define(['models/resumeItem'], function(ResumeItemModel) {

  var Interest = ResumeItemModel.extend({
  	defaults: {
  		interest: ''
  	}
  });

  return Interest
});