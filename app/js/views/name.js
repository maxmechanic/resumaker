define(['views/contactItems', 'models/name'], function(ContactItemsView, Name) {
  var NameView = ContactItemsView.extend({
    id: 'name',
    model: Name
  });

  return NameView;
});

