var apiKey = require('./../.env').apiKey;
var Repo = require('./../js/repo.js').repoModule;

$(document).ready(function() {
  $('#find_repo').click(function() {
    var user_name = $('#user_name').val();

console.log(user_name);
    // $.get('http://api.github.com/users/' + user_name + '/repos').then(function(response) {
    $.get('http://api.github.com/users/' + user_name + '?access_token=' + apiKey).then(function(response) {
      console.log(response);
      // var repoObject = new Repo();
      // $('.showResult').text('Here are the repos of ' + user_name + '.' +  'list all: ' + repoObject);
      $('.showResult').text('Here are the repos of ' + user_name + '.' +  ' List all: ' + response);
    }).fail(function(error) {
      $('.showResult').text(error.responseJSON.message);
    });
  });
});
