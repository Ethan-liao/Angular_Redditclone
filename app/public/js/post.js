(function() {
  'use strict'

  angular.module('app')
    .component('post', {
      bindings:{
        postfrommain:'<'
      },
      controller: postController,
      templateUrl: '/view/post.html'
    })

  postController.$inject = ['crudService'];

  function postController(crudService) {
    const vm = this;
    vm.postings = [];
    // vm.post = {};

    vm.$onInit = function() {
      // crudService.getPosts().then(function() {
      //   vm.postings = crudService.postEntriesFromDatabase;
      // });
      vm.postings = vm.post
      vm.showFormButton = true;
      vm.showform = false;
    }

    vm.editPost = function(post) {
      vm.showform = true;
      vm.showFormButton = false;
      vm.editButton = true;
      vm.post.title = post.title;
      vm.post.body = post.body;
      vm.post.author = post.author;
      vm.post.image_url = post.image_url;
      vm.postId = post.id
    }


    vm.upVote = function(currentPost) {
      crudService.voteUp(currentPost.id)
    }

    vm.downVote = function(currentPost) {
      if (currentPost.vote_count > 0) {
        crudService.voteDown(currentPost.id);
      }
    }
  }

}());
