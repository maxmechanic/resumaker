define(['collections/resume', 'models/profile'], function(ResumeCollection, Profile) {

  var ProfilesList = ResumeCollection.extend({
    model: Profile
  });

  return new ProfilesList();

});