(function() {
  'use strict'

  angular.module('app')
    .component('post', {
      bindings: {
        postfrommain: '<'
      },
      controller: postController,
      templateUrl: '/view/post.html'
    })

  postController.$inject = ['crudService', '$stateParams', '$state'];

  function postController(crudService, $stateParams, $state) {
    const vm = this;
    vm.postings = [];

    vm.$onInit = function() {
      vm.showFormButton = true;
      vm.showform = false;
    }

    vm.editPost = function(post) {
      vm.showFormButton = !post;
      vm.editButton = post;
    }

    vm.deletePost = function(postID) {
      crudService.postDelete(postID);
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
  // ending Iffe
}());
