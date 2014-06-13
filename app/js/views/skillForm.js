define(['views/form', 'models/skill', 'collections/skills', 'templates/skillForm.hbs'], function(FormView, Skill, Skills, template) {
  var SkillFormView = FormView.extend({
    initialize: function() {
      this.divId = 'skillForm';
      this.template = template;
      this.model = Skill;
      this.collection = Skills;
    }

  });

  return SkillFormView;
});

