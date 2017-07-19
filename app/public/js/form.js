(function() {
  'use strict'

  angular.module('app', )
    .component('formcomponent', {
      bindings: {
        formbinding: '<'
      },
      controller: postController,
      templateUrl: '/view/form.html'
    })
  postController.$inject = ['crudService'];

  function postController(crudService) {
    const vm = this;
    vm.post = {};

    vm.$onInit = function() {
      vm.showFormButton = true;
      vm.showform = true;
    }

    vm.addPost = function() {
      crudService.addPost(vm.post);
      vm.showform = false;
      vm.editButton = false;
      vm.post = {};
    }


  }
}());
