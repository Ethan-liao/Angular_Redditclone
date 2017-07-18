(function() {
  'use strict'

  angular.module('app')
    .component('comment', {
      bindings: {
        postsid: '<',
      },
      controller: commentController,
      templateUrl: '/view/comment.html'
    })

  commentController.$inject = ['commentsService'];

  function commentController(commentsService) {
    const vm = this;
    vm.comments = [];
    vm.comment = {};


    vm.$onInit = function() {
      commentsService.getComments(vm.postsid).then(function() {
        vm.comments = commentsService.commentEntriesFromDatabase
      });
    }

    vm.addcomment = function() {
      console.log(vm.postsid);
      console.log(vm.comment);
      commentsService.addComments(vm.postsid, vm.comment).then(function() {
        vm.comment = [];
      });
    };
    // ending controller
  }
}());
