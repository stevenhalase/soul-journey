'use strict'
angular.module('soulTrainApp')
  .factory('UserFactory', UserFactory);

  UserFactory.$inject = ['$http'];

  function UserFactory($http) {

    let currentUser = {};

    function getUser() {
      return $http.get('/api/me/');
    }

    return {
      getUser : getUser,
      currentUser : currentUser
    };
  }
