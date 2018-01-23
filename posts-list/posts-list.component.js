app.component('postsList', {
  templateUrl: 'posts-list/posts-list.html',
  controller: PostsListController,
  controllerAs: 'vm', //defaults as $ctrl
  bindings: {
    posts: '<' // < denotes one-way binding, = denotes two-way, and & denotes a function
  }
});

function PostsListController(mainSvc) {
  var vm = this;

// don't need this with nested views
  // mainSvc.getPosts()
  //   .then(function(response) {
  //     vm.posts = response.data;
  //   })
};
