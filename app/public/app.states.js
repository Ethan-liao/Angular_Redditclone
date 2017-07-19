(function() {
  'use strict'

angular.module('app').config(config)

config.$inject = ['$stateProvider', '$locationProvider']

function config($stateProvider, $locationProvider){

    // this line is optional
    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'home',
        url: '/',
        component: 'app',
      })
  }

}())
