define(['views/collections', 'collections/profiles'], function(CollectionsView, Profiles) {

  var ProfilesView = CollectionsView.extend({
  	id: '#profiles',
  	collection: Profiles
  });

  return ProfilesView;
});
