'use strict'
angular.module('soulTrainApp', ['ngCookies','ui.router'])
  .config(soulTrainRouter);

  soulTrainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

  function soulTrainRouter ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url : '/',
        templateUrl: './home/home-view.html',
        controller : 'homeCtrl as hCtrl'
      })
    $urlRouterProvider.otherwise('/');
  }

angular.module('soulTrainApp')
  .controller('indexCtrl', indexController)

  indexController.$inject = ['$http', 'UserFactory', '$rootScope'];

  function indexController ($http, UserFactory, $rootScope) {
    console.log('running')
    const iCtrl = this;
    iCtrl.title = 'Index Controller';
    iCtrl.showSignIn = true;
    iCtrl.userLoggedIn = false;
    iCtrl.failedLogin = false;
    UserFactory.getUser()
      .then(function(response) {
        console.log(response);
        iCtrl.user = response.data.user;
        console.log('email', iCtrl.user)
        if (iCtrl.user !== undefined) {
          iCtrl.userLoggedIn = true;
          iCtrl.showSignIn = true;
        }
      });

    // iCtrl.login = function () {
    //   $http({
    //     url: '/login',
    //     method: 'POST',
    //     data: {
    //       email: iCtrl.loginEmail,
    //       password: iCtrl.loginPassword
    //     }
    //   })
    //   .then(function(response) {
    //     // console.log(response);
    //     UserFactory.getUser()
    //       .then(function(response) {
    //         console.log(response);
    //         if (response.data.error) {
    //           iCtrl.failedLogin = true;
    //         }
    //         iCtrl.user = response.data.user;
    //         // console.log('email', iCtrl.user.email)
    //         if (iCtrl.user !== undefined) {
    //           iCtrl.userLoggedIn = true;
    //           iCtrl.showSignIn = true;
    //         }
    //       });
    //   })
    // }
    //
    // iCtrl.logout = function () {
    //   $http.get('/logout')
    //     .then(function(response) {
    //       iCtrl.userLoggedIn = false;
    //       iCtrl.showSignIn = true;
    //     })
    // }
    //
    // $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options) {
    //   UserFactory.getUser()
    //     .then(function(response) {
    //       console.log(response);
    //       iCtrl.user = response.data.user;
    //       // console.log('email', iCtrl.user.email)
    //       if (iCtrl.user.email) {
    //         iCtrl.userLoggedIn = true;
    //         iCtrl.showSignIn = true;
    //       }
    //     });
    // })
  }
