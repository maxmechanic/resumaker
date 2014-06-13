define(['views/form', 'models/interest', 'collections/interests', 'templates/interestForm.hbs'], function(FormView, Interest, Interests, template) {
  var InterestFormView = FormView.extend({
    initialize: function() {
      this.divId = 'interestForm';
      this.template = template;
      this.model = Interest;
      this.collection = Interests;
    }

  });

  return InterestFormView;
});

