define(['views/form', 'models/education', 'collections/educations', 'templates/educationForm.hbs'], function(FormView, Education, Educations, template) {
  var EducationFormView = FormView.extend({
    initialize: function() {
      this.divId = 'edForm';
      this.template = template;
      this.model = Education;
      this.collection = Educations;
    }

  });

  return EducationFormView;
});

