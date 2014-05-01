define([
  'backbone',
  'filesaver',
  'models/name',
  'models/email',
  'collections/educations',
  'collections/employments',
  'collections/skills',
  'collections/interests',
  'collections/profiles'
  ], function(Backbone, saveAs, Name, Email, Educations, Employments, Skills, Interests, Profiles) {

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

        var BuildView = require( 'views/build');
        new BuildView().render();

      },

      filterResume: function(param) {


      },

      output: function() {
        this.closeOldView();

        var OutputView = require('views/output');
        new OutputView().render();
      },

      json: function() {
        this.closeOldView();

        var JsonView= require('views/json');
        new JsonView().render();
      },

      downloadJSON: function() {
        var jsonData = {
          name: Name.toJSON().name || '',
          email: Email.toJSON().email || '',
          education: Educations.toJSON(),
          employment: Employments.toJSON(),
          skills: Skills.toJSON(),
          interests: Interests.toJSON(),
          profiles: Profiles.toJSON()
        };

        var blob = new Blob([JSON.stringify(jsonData)], {type: 'application/json'});
        saveAs(blob, 'resume.json');
      },

      downloadHTML: function() {
        var htmlData = {
          name: Name.toJSON().name || '',
          email: Email.toJSON().email || '',
          education: Educations.toJSON(),
          employment: Employments.toJSON(),
          skills: Skills.toJSON(),
          interests: Interests.toJSON(),
          profiles: Profiles.toJSON()
        };

        var blob = new Blob([templates['fullResume.hbs'](htmlData)], {type: 'text/html'});
        saveAs(blob, 'resume.html');
      },

      closeOldView: function() {
        this.trigger('close'); //need to set pageviews to trigger close function as a ListenTo on this parent view.
      }

    });


    return new Router();
});
