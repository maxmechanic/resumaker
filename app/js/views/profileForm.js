define(['views/form', 'models/profile', 'collections/profiles', 'templates/profileForm.hbs'], function(FormView, Profile, Profiles, template) {

  var ProfileFormView = FormView.extend({
  	initialize: function() {
  		this.divId = 'profileForm';
  		this.template = template;
  		this.model = Profile;
  		this.collection = Profiles;
  	}

  });

  return ProfileFormView;

});