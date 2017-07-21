(function() {
  'use strict'

  angular.module('app', )
    .component('formcomponent', {
      bindings: {
        posttoform: '<',
      },
      controller: postController,
      templateUrl: '/view/form.html'
    })

  postController.$inject = ['crudService', '$stateParams', '$state'];

  function postController(crudService, $stateParams, $state) {
    const vm = this;
    vm.post = {};

    vm.$onInit = function() {
      vm.showform = true;
      if ($stateParams.clickEdit) {
        vm.post = $stateParams.data;
        vm.editButton = true;
        vm.showFormButton = false;
      }
      vm.showFormButton = $stateParams.clickNewPost;
    }

    vm.addPost = function() {
      crudService.addPost(vm.post);
      vm.showform = false;
      vm.editButton = false;
      vm.post = {};
      $state.go('mainpage');
    }

    vm.submitPostChanges = function(postID) {
      vm.editButton = false;
      vm.showform = false;
      crudService.postEdit(postID, vm.post);
      $state.go('mainpage');
    }
  }
  // ending Iffe
}());
