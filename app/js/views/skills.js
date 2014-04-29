define(['views/collections', 'collections/skills'], function(CollectionsView, Skills) {
  var SkillsView = CollectionsView.extend({
    id: '#skills',
    collection: Skills
  });

  return SkillsView
});


