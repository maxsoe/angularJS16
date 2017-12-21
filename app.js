var app = angular.module('firstAngularApp',[]);

app.controller('mainCtrl', function() {
  this.hello = "world";

  this.fruits = ['apples', 'oranges', 'grapes'];

  this.alertMe = function() {
    alert('Button pressed');
  };
});
