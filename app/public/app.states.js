(function() {
  'use strict'

angular.module('app').config(config)

config.$inject = ['$stateProvider','$urlRouterProvider', '$locationProvider']

function config($stateProvider, $urlRouterProvider, $locationProvider){

    // this line is optional
    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'mainpage',
        url: '/',
        component: 'mainpage',
      })
      .state({
        name: 'edit',
        url: '/posts/:id/edit',
        component: 'formcomponent',
        params:{
          data:{},
          clickEdit:{},
        }
      })
      .state({
        name: 'addPost',
        url: '/posts/add',
        component: 'formcomponent',
        params:{
          clickNewPost:{},
        }
      })
  }

}())
