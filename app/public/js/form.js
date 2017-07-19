(function() {
  'use strict'

  angular.module('app', )
    .component('formcomponent', {
      bindings: {
        posttoform: '<',
        booleanbinding:'<'
      },
      controller: postController,
      templateUrl: '/view/form.html'
    })
  postController.$inject = ['crudService'];

  function postController(crudService) {
    const vm = this;
    vm.post = {};

    vm.$onInit = function() {
      vm.showform = true;
      vm.showFormButton = !vm.booleanbinding;
      vm.editButton = vm.booleanbinding;
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

  }
}());
