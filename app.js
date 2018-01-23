var app = angular.module('firstAngularApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  // var homeState = {
  //   name: 'home',
  //   url: '/',
  //   templateUrl: 'home.html'
  // };
  //
  // var postsState = {
  //   name: 'posts',
  //   url: '/posts',
  //   template: '<ui-view></ui-view>'
  // };
  //
  // var postsIncompleteState = {
  //   name: 'posts.incomplete',
  //   url: '/incomplete',
  //   template: '<posts-list posts="vm.incompletePosts"></posts-list>',
  //   controllerAs: 'vm'
  // };
  //
  // var postsCompleteState = {
  //   name: 'posts.complete',
  //   url: '/complete',
  //   template: '<posts-list posts="vm.completePosts"></posts-list>',
  //   controllerAs: 'vm'
  // };
  //
  // $stateProvider.state(homeState);
  // $stateProvider.state(postsState);
  // $stateProvider.state(postsIncompleteState);
  // $stateProvider.state(postsCompleteState);


  // $stateProvider
  //   .state('home', {
  //     url: '/',
  //     templateUrl: 'home.html'
  //   })
  //   .state('posts', {
  //     url: '/posts',
  //     template: '<posts-list></posts-list>'
  //   });

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html'
    })
    .state('posts', {
      url: '/posts',
      template: '<ui-view><posts-list></posts-list></ui-view>'
    })
    .state('posts.incomplete', {
      url: '/incomplete',
      template: '<posts-list posts="vm.incompletePosts"></posts-list>',
      controllerAs: 'vm'
    })
    .state('posts.complete', {
      url: '/complete',
      template: '<posts-list posts="vm.completePosts"></posts-list>',
      controllerAs: 'vm'
    })
});

app.controller('mainCtrl', function(mainSvc) {
  var vm = this;
  vm.hello = "world";
  vm.alertMe = function() {
    alert('Button pressed');
  };
  vm.fruits = ['apple', 'orange', 'grape'];

  mainSvc.getPosts().then(response => {
    this.incompletePosts = response.data.splice(0, 50);
    this.completePosts = response.data;
    this.posts = this.completePosts;

  });
});

app.filter('makePlural', function() {
  return function(input) {
    return (input + "s");
  };
});

// using factory
// app.factory('mainSvc', function($http) {
//       var getPosts = function() {
//         return $http.get('https://jsonplaceholder.typicode.com/posts');
//       };
//       return {
//         getPosts: getPosts
//       };
// });

// using service
app.service('mainSvc', function($http) {
  this.getPosts = function() {
    return $http.get('https://jsonplaceholder.typicode.com/posts');
  }
});
