var app = app || {};

app.BuildView = Backbone.View.extend({

	id: '#buildView',

	template: templates['build.hbs'],

	events: {
		'click #buildNav': 'navClick',
		'click #buildSingleNav': 'navSingle',
		'click #closeForm': 'closeForm',
		'keypress': 'closeOnEsc'
	},

	initialize: function() {
		this.listenTo(app.Router, 'close', this.close);

		this.childViews = [];
		this.viewMethods = [
			app.NameView,
			app.EmailView,
			app.EducationsView,
			app.EmploymentsView,
			app.SkillsView,
			app.InterestsView,
			app.ProfilesView
		];

		this.changeForms = {
			changeName: app.Name,
			changeEmail: app.Email
		};


		this.forms = {
			addEducation: app.EducationFormView,
			addEmployment: app.EmploymentFormView,
			addSkill: app.SkillFormView,
			addInterest: app.InterestFormView,
			addProfile: app.ProfileFormView
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

		this.activeForm = new app.ChangeFormView({model: this.changeForms[e.target.id]});
		this.listenTo(this.activeForm, 'close', this.removeClass);
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