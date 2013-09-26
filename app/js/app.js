new app.AppView({el: 'body'});

Handlebars.registerHelper('json', function(json) {
    return JSON.stringify(json);
});
