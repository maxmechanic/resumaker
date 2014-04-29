define(['views/collections', 'collections/interests'], function(CollectionsView, Interests) {

  var InterestsView = CollectionsView.extend({
    id: '#interests',
    collection: Interests
  });

  return InterestsView;

});

