var app = angular.module('firstAngularApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  var homeState = {
    name: 'home',
    url: '/',
    templateUrl: 'home.html'
  };

  // var postsState = {
  //   name: 'posts',
  //   url: '/posts',
  //   template: '<posts-list></posts-list>'
  // };

  var postsState = {
    name: 'posts',
    url: '/posts',
    template: '<ui-view></ui-view>'
  };

  var postsIncompleteState = {
    name: 'posts.imcomplete',
    url: '/incomplete',
    template: '<posts-list posts="vm.imcompletePosts"></posts-list>',
    controllerAs: 'vm'
  };

  var postsCompleteState = {
    name: 'posts.complete',
    url: '/complete',
    template: '<posts-list posts="vm.completePosts"></posts-list>',
    controllerAs: 'vm'
  };

  $stateProvider.state(homeState);
  $stateProvider.state(postsState);
  $stateProvider.state(postsIncompleteState);
  $stateProvider.state(postsCompleteState);

  // $stateProvider
  //   .state('home', {
  //     url: '/',
  //     templateUrl: 'home.html'
  //   })
  //   .state('posts', {
  //     url: '/posts',
  //     template: '<posts-list></posts-list>'
  //   });
});

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
