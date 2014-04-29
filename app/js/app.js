require(['./views/app.js', 'backbone'], function(AppView, Backbone) {
  Backbone.history.start();
  new AppView({el: 'body'});

});




