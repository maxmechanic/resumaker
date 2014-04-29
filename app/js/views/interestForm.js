define(['views/form', 'models/interest', 'collections/interests'], function(FormView, Interest, Interests) {
  var InterestFormView = FormView.extend({
    initialize: function() {
      this.divId = 'interestForm';
      this.template = templates['interestForm.hbs'];
      this.model = Interest;
      this.collection = Interests;
    }

  });

  return InterestFormView;
});

