var app = angular.module('firstAngularApp', []);

app.controller('mainCtrl', function(mainSvc) {
  var vm = this;
  this.hello = "world";
  this.fruits = ['apple', 'orange', 'grape'];
  this.alertMe = function() {
    alert('Button pressed');
  };
  mainSvc.getPosts()
    .then(function(response) {
      vm.posts = response.data;
    })
});

app.filter('makePlural', function() {
  return function(input) {
    return (input + "s");
  };
});

app.service('mainSvc', function($http) {
  this.getPosts = function() {
    return $http.get('https://jsonplaceholder.typicode.com/posts');
  }
})
