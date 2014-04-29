define(['views/contactItems', 'models/email'], function (ContactItemsView, Email) {
  var EmailView = ContactItemsView.extend({
    id: 'email',
    model: Email
  });

  return EmailView;
});

