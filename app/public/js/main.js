(function() {
  'use strict'

  angular.module('app', ['angularMoment'])
    .component('mainpage', {
      bindings:{
        formshow:'<'
      },
      controller: postController,
      templateUrl: '/view/main.html'
    })

  postController.$inject = ['crudService'];

  function postController(crudService) {
    const vm = this;
    vm.postings = [];


    vm.$onInit = function() {
      crudService.getPosts().then(function() {
        vm.postings = crudService.postEntriesFromDatabase;
      });
      vm.showFormButton = true;
    }

    // ending controller
  }
}());
