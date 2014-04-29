define(['backbone', 'jquery', 'routers/router'], function (Backbone, $, router) {
  var AppView = Backbone.View.extend({
    initialize: function() {
      this.nav = $('#topNav');

      this.listenTo(router, 'route', this.classChange);
    },

    classChange: function(route) {
      this.nav.children().removeClass('active');
      $('#' + route).addClass('active');
    }
  });

  return AppView;

});





