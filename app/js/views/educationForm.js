define(['views/form', 'models/education', 'collections/educations'], function(FormView, Education, Educations) {
  var EducationFormView = FormView.extend({
    initialize: function() {
      this.divId = 'edForm';
      this.template = templates['educationForm.hbs'];
      this.model = Education;
      this.collection = Educations;
    }

  });

  return EducationFormView;
});

