angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicPlatform, $ionicHistory, $ionicPopup) {

  $scope.goBack = function() {
    $ionicHistory.goBack();
  };

  $scope.data = { 'mood' : '6' };
  
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  $scope.$on('$ionicView.enter', function(e) {
  });
  $scope.showThanks = function() {
    var alertPopup = $ionicPopup.alert({
      title: 'Mood submitted',
      template: 'Thanks very much!'
    });

    };
});
