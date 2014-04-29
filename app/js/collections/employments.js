define(['collections/resume', 'models/employment'], function(ResumeCollection, Employment) {

  var EmploymentsList = ResumeCollection.extend({
    model: Employment
  });

  return new EmploymentsList();

});