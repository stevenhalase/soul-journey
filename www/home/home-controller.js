'use strict'
angular.module('soulTrainApp')
  .controller('homeCtrl', homeController);

  homeController.$inject = ['UserFactory', '$cookies', '$state'];

  function homeController (UserFactory, $cookies, $state) {
    const hCtrl = this;
    hCtrl.title = 'Home Controller';

    UserFactory.getUser()
      .then(function(response) {
        hCtrl.user = response.data.user;
        console.log('Home User', hCtrl.user)
      });
  }
