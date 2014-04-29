define(['views/collections', 'collections/educations'], function(CollectionsView, Educations) {
  var EducationsView = CollectionsView.extend({
    id: 'education',
    collection: Educations
  });

  return EducationsView;
});


