define(['views/collections', 'collections/employments'], function(CollectionsView, Employments) {
  var EmploymentsView = CollectionsView.extend({
    id: '#employment',
    collection: Employments
  });

  return EmploymentsView;
});


