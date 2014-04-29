define(['collections/resume', 'models/skill'], function(ResumeCollection, Skill) {
  var SkillsList = ResumeCollection.extend({
    model: Skill
  });

  return new SkillsList();

});

