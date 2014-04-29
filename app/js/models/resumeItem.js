define(['backbone'], function(Backbone) {

  var ResumeItemModel = Backbone.Model.extend({
    initialize: function() {
      this.on('invalid', function(model, error){
        alert(error);
      });
    },
    validate: function(attrs) {
      alert('validating');
      _.each(attrs, function(attr) {
        if (!attr) {
          return 'field must be filled';
        }
      });
    }
  });

  return ResumeItemModel;
});