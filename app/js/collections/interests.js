define(['collections/resume', 'models/interest'], function(ResumeCollection, Interest) {

  var InterestsList = ResumeCollection.extend({
    model: Interest
  });

  return new InterestsList();

});