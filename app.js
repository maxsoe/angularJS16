var app = angular.module('firstAngularApp', []);

app.controller('mainCtrl', function() {
  var vm = this;
  this.hello = "world";
  this.fruits = ['apple', 'orange', 'grape'];
  this.alertMe = function() {
    alert('Button pressed');
  };
});

app.filter('makePlural', function() {
  return function(input) {
    return (input + "s");
  };
});

// using factory
app.factory('mainSvc', function($http) {
  var getPosts = function() {
    return $http.get('https://jsonplaceholder.typicode.com/posts');
  };
  return {
    getPosts: getPosts
  };
});

// using service
// app.service('mainSvc', function($http) {
//   this.getPosts = function() {
//     return $http.get('https://jsonplaceholder.typicode.com/posts');
//   };
// });
