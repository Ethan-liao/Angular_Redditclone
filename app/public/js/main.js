(function() {
  'use strict'

  angular.module('app', ['angularMoment'])
    .component('mainpage', {
      bindings:{
        form:'<'
      },
      controller: postController,
      templateUrl: '/view/main.html'
    })

  postController.$inject = ['crudService'];

  function postController(crudService) {
    const vm = this;
    vm.postings = [];
    // vm.post = {};


    vm.$onInit = function() {
      crudService.getPosts().then(function() {
        vm.postings = crudService.postEntriesFromDatabase;
      });
      vm.showFormButton = true;
      vm.form = false;
    }


    vm.addPost = function() {
      crudService.addPost(vm.post);
      vm.showform = false;
      vm.editButton = false;
      vm.post = {};
    }



    vm.submitPostChanges = function(postID, postinfo) {
      vm.editButton = false;
      vm.showform = false;
      crudService.postEdit(postID, vm.post);
    }



    // ending controller
  }
}());
