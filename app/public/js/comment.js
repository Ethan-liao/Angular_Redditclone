(function() {
  'use strict'

  angular.module('app')
    .component('comment', {
      bindings: {
        postsid: '<',
      },
      controller: postController,
      templateUrl: '/view/comment.html'
    })

  postController.$inject = ['crudService'];

  function postController(crudService) {
    const vm = this;
    vm.comments = [];
    vm.comment = {};


    vm.$onInit = function() {
      crudService.getComments(vm.postsid).then(function() {
        vm.comments = crudService.commentEntriesFromDatabase
      });
    }

    vm.addcomment = function() {
      console.log(vm.postsid);
      console.log(vm.comment);
      crudService.addComments(vm.postsid, vm.comment).then(function(){
        vm.comment=[];
      });
    };

    // ending controller
  }
}());
