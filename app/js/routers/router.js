var app = app || {};

var Router = Backbone.Router.extend({
  routes: {
    'build': 'build',
    'build/:element': 'filterResume',
    'build/new/:element': 'buildForm',
    'output': 'output',
    'json': 'json',
    'download/json': 'downloadJSON',
    'download/html': 'downloadHTML'

  },

  build: function() {
    this.closeOldView();
    new app.BuildView().render();

  },

  filterResume: function(param) {


  },

  output: function() {
    this.closeOldView();
    new app.OutputView().render();
  },

  json: function() {
    this.closeOldView();
    new app.JsonView().render();
  },

  downloadJSON: function() {
    var jsonData = {
      name: app.Name.toJSON().name || '',
      email: app.Email.toJSON().email || '',
      education: app.Educations.toJSON(),
      employment: app.Employments.toJSON(),
      skills: app.Skills.toJSON(),
      interests: app.Interests.toJSON(),
      profiles: app.Profiles.toJSON()
    };

    var blob = new Blob([JSON.stringify(jsonData)], {type: 'application/json'});
    saveAs(blob, 'resume.json');
  },

  downloadHTML: function() {
    var htmlData = {
      name: app.Name.toJSON().name || '',
      email: app.Email.toJSON().email || '',
      education: app.Educations.toJSON(),
      employment: app.Employments.toJSON(),
      skills: app.Skills.toJSON(),
      interests: app.Interests.toJSON(),
      profiles: app.Profiles.toJSON()
    };

    var blob = new Blob([templates['fullResume.hbs'](htmlData)], {type: 'text/html'});
    saveAs(blob, 'resume.html');
  },

  closeOldView: function() {
    this.trigger('close'); //need to set pageviews to trigger close function as a ListenTo on this parent view.
  }

});

app.Router = new Router();
Backbone.history.start();
