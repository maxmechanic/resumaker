define(['backbone', 'collections/educations', 'collections/employments', 'collections/skills', 'collections/interests', 'collections/profiles'],
	function(Educations,
		Employments,
		Skills,
		Interests,
		Profiles) {

			return Backbone.Model.extend({
				defaults: {
					name: '',
					email: '',
					education: [],
					skills: [],
					interests: [],
					profiles: []
				},
				initialize: function() {
					this.listenTo(Educations, 'change', this.update);
					this.listenTo(Employments, 'change', this.update);
					this.listenTo(Skills, 'change', this.update);
					this.listenTo(Interests, 'change', this.update);
					this.listenTo(Profiles, 'change', this.update);
				}
			});


});

