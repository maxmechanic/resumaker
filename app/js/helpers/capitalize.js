define([], function() {
  return function(word) {
    return word[0].toUpperCase() + word.substr(1);
  });
});