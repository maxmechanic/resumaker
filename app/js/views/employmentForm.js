define(['views/form', 'models/employment', 'collections/employments', 'templates/employmentForm.hbs'], function (FormView, Employment, Employments, template) {
  var EmploymentFormView = FormView.extend({
    initialize: function() {
      this.divId = 'empForm';
      this.template = template;
      this.model = Employment;
      this.collection = Employments;
    }

  });

  return EmploymentFormView;
});

