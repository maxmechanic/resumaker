define(['views/form', 'models/profile', 'collections/profiles'], function(FormView, Profile, Profiles) {

  var ProfileFormView = FormView.extend({
  	initialize: function() {
  		this.divId = 'profileForm';
  		this.template = templates['profileForm.hbs'];
  		this.model = Profile;
  		this.collection = Profiles;
  	}

  });

  return ProfileFormView;

});