define(['collections/resume', 'models/education'], function(ResumeCollection, Education) {

  var EducationsList = ResumeCollection.extend({
  	model: Education
  });

  return new EducationsList();

});