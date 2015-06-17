angular.module('starter.controllers', ['ngCordova'])

// .controller('LoginCtrl', function($scope, $cordovaOauth, $state, LoginService)) {

//   $scope.data = {};
 
//   $scope.login = function() {
//     LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
//       $state.go('app.personal_settings');
//     }).error(function(data) {
//       var alertPopup = $ionicPopup.alert({
//         title: 'Login failed!',
//         template: 'Please check your credentials!'
//       });
//     });
//   }

//   $scope.twitterlogin = function() {
//     $cordovaOauth.twitter("CLIENT_ID_HERE", ["email"]).then(function(result) {
//       // results
//     }, function(error) {
//       // error
//     });
//   }
// })

// .service('LoginService', function($q) {
//     return {
//         loginUser: function(name, pw) {
//             var deferred = $q.defer();
//             var promise = deferred.promise;
 
//             if (name == 'user' && pw == 'secret') {
//                 deferred.resolve('Welcome ' + name + '!');
//             } else {
//                 deferred.reject('Wrong credentials.');
//             }
//             promise.success = function(fn) {
//                 promise.then(fn);
//                 return promise;
//             }
//             promise.error = function(fn) {
//                 promise.then(null, fn);
//                 return promise;
//             }
//             return promise;
//         }
//     }
// })

.controller('AppCtrl', function($scope, $timeout, $ionicPlatform, $ionicHistory, $ionicPopup, $cordovaOauth, $cordovaBackgroundGeolocation) {

  $scope.goBack = function() {
    $ionicHistory.goBack();
  };

  $scope.data = { 'mood' : '6' };
  
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  $scope.$on('$ionicView.enter', function(e) {});
  $scope.showThanks = function() {
    var alertPopup = $ionicPopup.alert({
      title: 'Mood submitted',
      template: 'Thanks very much!'
    });
   };

  // Add BackgroundGeolocation event-listeners when Platform is ready.
  ionic.Platform.ready(function() {
    var bgGeo = BackgroundGeolocation.getPlugin();
  });

  /**
  * BackgroundGelocation plugin state
  */
  $scope.bgGeo = {
    enabled: window.localStorage.getItem('bgGeo:enabled') == 'true',
    started: window.localStorage.getItem('bgGeo:started') == 'true'
  };

  /**
  * Enable BackgroundGeolocation
  */
  $scope.onToggleEnabled = function() {
    var isEnabled = $scope.bgGeo.enabled;
    console.log('onToggleEnabled: ', isEnabled);
    BackgroundGeolocation.setEnabled(isEnabled);
    
    var alertPopup = $ionicPopup.alert({
      title: 'Location',
      template: 'hier locatie'
    });

    if (!isEnabled) {
      $scope.bgGeo.started = false;
    }
  };

});