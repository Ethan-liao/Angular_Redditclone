(function() {
  'use strict'

  angular.module('app', [])
    .component('post', {
      controller: postController,
      templateUrl: '/view/post.html'
    })

  postController.$inject = ['crudService'];

  function postController(crudService) {
    const vm = this;
    vm.postings = [];
    vm.post = {};


    vm.$onInit = function() {
      crudService.getPosts().then(function(){
        vm.postings = crudService.postEntriesFromDatabase;
      });
      vm.showFormButton=true;
      vm.showform = false;
      // console.log(vm.postings);
    }


    vm.addPost = function() {
      crudService.addPost(vm.post);
      vm.showform = false;
      vm.editButton = false;
      vm.post = {};
    }

    vm.editPost = function(post) {
      vm.showform = true;
      vm.showFormButton = false;
      vm.editButton = true;
      // crudService.postEdit(post)
      vm.post.title = post.title;
      vm.post.body = post.body;
      vm.post.author = post.author;
      vm.post.image_url = post.image_url;
      vm.postId = post.id
      // console.log(post);
    }

    vm.submitPostChanges = function(postID,postinfo) {
      vm.editButton = false;
      vm.showform = false;
      crudService.postEdit(postID,vm.post);


    }


    vm.upVote = function(currentPost) {
      crudService.voteUp(currentPost.id)

    }
    vm.downVote = function(currentPost) {
      if (currentPost.vote_count > 0) {
        crudService.voteDown(currentPost.id);
      }
    }



    // ending controller
  }
}());
