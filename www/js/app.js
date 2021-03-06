// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])


  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })

      .state('app.browse', {
        url: '/browse',
        views: {
          'menuContent': {
            templateUrl: 'templates/browse.html'
          }
        }
      })

      .state('app.profile', {
        url: '/profile',
        views: {
          'menuContent': {
            templateUrl: 'templates/profile.html',
            controller: 'ProfileCtrl'
          }
        }
      })

      .state('app.wheel', {
        url: '/wheel',
        views: {
          'menuContent': {
            templateUrl: 'templates/games/wheel.html'
          }
        }
      })

      .state('app.referrals', {
        url: '/referrals',
        views: {
          'menuContent': {
            templateUrl: 'templates/referrals/referrals.html',
            controller: 'ReferralCtrl'
          }
        }
      })

      .state('app.redeem', {
        url: '/redeem',
        views: {
          'menuContent': {
            templateUrl: 'templates/redeem/redeem.html',
            controller: 'RedeemCtrl'
          }
        }
      })

      .state('app.referralstest', {
        url: '/referralstest',
        views: {
          'menuContent': {
            templateUrl: 'templates/referrals/referralstest.html',
            controller: 'ReferTestCtrl'
          }
        }
      })

      .state('app.volunteer', {
        url: '/volunteer',
        views: {
          'menuContent': {
            templateUrl: 'templates/volunteer/volunteer.html',
            controller: 'VolunteerCtrl'
          }
        }
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/profile');
  });
