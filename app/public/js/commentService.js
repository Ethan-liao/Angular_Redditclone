(function() {
  'use strict';

  angular.module('app')
    .service('commentsService', ['$http', function service($http) {

      const db = this;
      db.commentEntriesFromDatabase = [];

      db.getComments = function(postID) {
        return $http.get(`/api/posts/${postID}/comments`).then(function(response) {
          console.log(response);
          db.commentEntriesFromDatabase = response.data;
        })
      }

      db.addComments = function(postID, commentContent) {
        return $http.post(`/api/posts/${postID}/comments`, commentContent).then(function(response) {
              db.commentEntriesFromDatabase.push(response.data);
              return;
        })
      }

      db.postEdit = function(postID, updatedInfo) {
        $http.patch(`api/posts/${postID}`, updatedInfo).then(function(response) {
          db.postEntriesFromDatabase.push(response.data);
        })
      }

    }]);
}());
