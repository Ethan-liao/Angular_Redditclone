(function() {
  'use strict';

  angular.module('app')
    .service('crudService', ['$http', function service($http) {

      const db = this;
      db.postEntriesFromDatabase = [];


      db.getPosts = function() {
        return $http.get('/api/posts').then(function(response) {
          db.postEntriesFromDatabase = response.data;
        })
      }

      db.addPost = function(newPostData) {
        $http.post('api/posts', newPostData).then(function(response) {
          db.postEntriesFromDatabase.push(response.data)
        })
      }

      function getIndex(object) {
        return db.postEntriesFromDatabase.indexOf(object);
      }

      db.postDelete = function(postID) {
        $http.delete(`api/posts/${postID}`).then(function(response) {
          for (var i = 0; i < db.postEntriesFromDatabase.length; i++) {
            if (db.postEntriesFromDatabase[i].id === postID) {
              return db.postEntriesFromDatabase.splice(getIndex(db.postEntriesFromDatabase[i]), 1);
            }
          }
        })
      }

      db.postEdit = function(postID, updatedInfo) {
        $http.patch(`api/posts/${postID}`, updatedInfo).then(function(response) {
          db.postEntriesFromDatabase.forEach(function() {
            if (db.postEntriesFromDatabase.id === response.data.id) {
              db.postEntriesFromDatabase = response.data;
            }
          })
        })
      }

      db.voteUp = function(postID) {
        $http.post(`/api/posts/${postID}/votes`).then(function(response) {
          for (var i = 0; i < db.postEntriesFromDatabase.length; i++) {
            if (db.postEntriesFromDatabase[i].id == postID) {
              db.postEntriesFromDatabase[i].vote_count = response.data.vote_count;
            }
          }
        })
      }

      db.voteDown = function(postID) {
        $http.delete(`/api/posts/${postID}/votes`).then(function(response) {
          for (let i = 0; i < db.postEntriesFromDatabase.length; i++) {
            if (db.postEntriesFromDatabase[i].id === postID) {
              db.postEntriesFromDatabase[i].vote_count -= 1;
            }
          }
        });
      };
      // ending service
    }])
  // ending iffe
}());
