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


    vm.$onInit = function() {
      vm.postings = vm.post
      vm.showFormButton = true;
      vm.showform = false;
    }

    vm.editPost = function(post) {
      vm.showFormButton = !post;
      vm.editButton = post;

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
