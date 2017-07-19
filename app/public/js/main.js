(function() {
  'use strict'

  angular.module('app', ['angularMoment','ui.router'])
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



    vm.testForm = function(boolean){
      console.log(boolean);
    }

    vm.submitPostChanges = function(postID, postinfo) {
      vm.editButton = false;
      vm.showform = false;
      crudService.postEdit(postID, vm.post);
      // ng-click="$ctrl.editPost($ctrl.postfrommain)";
    }



    // ending controller
  }
}());
