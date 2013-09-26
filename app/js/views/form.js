var app = app || {};

//what's different?
//templateScript, model, collection, view
app.FormView = Backbone.View.extend({

	id: '#form',

	events: {
		'submit form': 'submitForm'
	},

	initialize: function() {},

	render: function() {
		$('#buildForm').append(this.$el);
		this.$el.html(this.template(''));
		return this;
	},

	submitForm: function(e) {
		e.preventDefault();

		if (e.target.id !== this.divId) {
			return;
		}

		var formData = $('form').serializeArray();
		var modelData = {};

		for (var i = 0; i < formData.length; i++) {
			modelData[formData[i].name] = formData[i].value;
		}

		var newModel = new this.model(modelData);
		this.collection.add([newModel]);

		$('form input').val('');
		$('.form-control:first').focus();

	},

 	close: function() {
 		this.unbind();
		this.remove();
	}

});