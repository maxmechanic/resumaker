Handlebars.registerHelper('json', function(json) {
    return JSON.stringify(json);
});

Handlebars.registerHelper('capitalize', function(word) {
  return word[0].toUpperCase() + word.substr(1);
});