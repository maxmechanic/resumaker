define([
	'backbone',
	'underscore',
	'routers/router',
	'views/name',
	'views/email',
	'views/educations',
	'views/employments',
	'views/skills',
	'views/interests',
	'views/profiles',
	'models/name',
	'models/email',
	'views/educationForm',
	'views/employmentForm',
	'views/skillForm',
	'views/interestForm',
	'views/profileForm',
	'views/changeForm',
	'templates/build.hbs'
	], function(
		Backbone,
		_,
		router,
		NameView,
		EmailView,
		EducationsView,
		EmploymentsView,
		SkillsView,
		InterestsView,
		ProfilesView,
		Name,
		Email,
		EducationFormView,
		EmploymentFormView,
		SkillFormView,
		InterestFormView,
		ProfileFormView,
		ChangeFormView,
		template) {
	var BuildView = Backbone.View.extend({

		id: '#buildView',

		template: template,

		events: {
			'click #buildNav': 'navClick',
			'click #buildSingleNav': 'navSingle',
			'click #closeForm': 'closeForm',
			'keypress': 'closeOnEsc'
		},

		initialize: function() {
			this.listenTo(router, 'close', this.close);

			this.childViews = [];
			this.viewMethods = [
				NameView,
				EmailView,
				EducationsView,
				EmploymentsView,
				SkillsView,
				InterestsView,
				ProfilesView
			];

			this.changeForms = {
				changeName: Name,
				changeEmail: Email
			};


			this.forms = {
				addEducation: EducationFormView,
				addEmployment: EmploymentFormView,
				addSkill: SkillFormView,
				addInterest: InterestFormView,
				addProfile: ProfileFormView
			};

		},

		navSingle: function(e) {
			var navButton = $(e.target).parent();

			if (navButton.hasClass('active')) {
				return;
			}
			$('#build nav').children().removeClass('active');
			navButton.addClass('active');

			if (this.activeForm) {
				this.activeForm.close();
			}

			this.activeForm = new ChangeFormView({model: this.changeForms[e.target.id]});
			this.activeForm.render();

		},

		removeClass: function() {
			$('#build nav').children().removeClass('active');
		},

		navClick: function(e) {
			var navButton = $(e.target).parent();
			if (navButton.hasClass('active')) {
				return;
			}

			$('#buildForm').empty();
			$('#build nav').children().removeClass('active');
			navButton.addClass('active');

			if (this.activeForm) {
				this.activeForm.close();
			}

			this.activeForm = new this.forms[e.target.id]({
				options: {
					action:'add'
				}
			});

			this.activeForm.render();

		},

		edit: function(model) {
			this.forms.addEducation.values = model.toJSON();
			this.forms.addEducation.render();
		},

		render: function() {
			$('#outlet').append(this.$el.html(this.template('')));
			var viewStack = this.childViews;

			_.each(this.viewMethods, function(view) {
					var newView = new view();
					viewStack.push(newView);
			});

		},

		closeOnEsc: function(e) {
			if (e.keyCode === 27) {
				this.closeForm();
			}
		},

		closeForm: function() {
			this.activeForm.close();
			this.activeForm = null;
		},

		close: function() {
			_.each(this.childViews, function(childView) {
				childView.close();
			});
			if (this.activeForm) {
				this.activeForm.close();
			}
			this.remove();
			this.unbind();
		}

	});

	return BuildView;

});

