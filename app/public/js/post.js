(function() {
  'use strict'

angular.module('app',[])
  .component('post', {
    controller: postController,
    templateUrl:'/view/post.html'
  })

  postController.$inject = ['crudService'];

  function postController (crudService){
    const vm = this;
    vm.$onInit = function(){
      console.log(" injection part works");
    }
  }



}());
