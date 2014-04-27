define(['deps/backbone/backbone'], function (Backbone) {
  var AppView = View.extend({
    initialize: function() {
      this.nav = $('#topNav');

      this.listenTo(app.Router, 'route', this.classChange);
    },

    classChange: function(route) {
      this.nav.children().removeClass('active');
      $('#' + route).addClass('active');
    }
  });

  return AppView;

});





