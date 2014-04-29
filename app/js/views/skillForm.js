define(['views/form', 'models/skill', 'collections/skills'], function(FormView, Skill, Skills) {
  var SkillFormView = FormView.extend({
    initialize: function() {
      this.divId = 'skillForm';
      this.template = templates['skillForm.hbs'];
      this.model = Skill;
      this.collection = Skills;
    }

  });

  return SkillFormView;
});

