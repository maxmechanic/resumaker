define(['views/form', 'models/employment', 'collections/employments'], function (FormView, Employment, Employments) {
  var EmploymentFormView = FormView.extend({
    initialize: function() {
      this.divId = 'empForm';
      this.template = templates['employmentForm.hbs'];
      this.model = Employment;
      this.collection = Employments;
    }

  });

  return EmploymentFormView;
});

