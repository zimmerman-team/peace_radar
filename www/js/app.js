// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])
app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider.state('navigation', {
    url: '/',
    templateUrl: 'templates/navigation.html'
  });
  $stateProvider.state('share_your_data', {
    url: '/share_your_data',
    templateUrl: 'templates/share_your_data.html',
    controller: 'ShareDataCtrl'
      

  });
  
  $stateProvider.state('peace_barometer', {
    url: '/',
    templateUrl: 'templates/peace_barometer.html',
    controller:'PeaceBarometerCtrl'
  });
  $stateProvider.state('diary', {
    url: '/',
    templateUrl: 'templates/diary.html',
    controller:'DiaryCtrl'
  });
  $stateProvider.state('peace_radar', {
    url: '/',
    templateUrl: 'templates/peace_radar.html',
    controller:'PeaceRadarCtrl'

  });
  $stateProvider.state('neighbourhood', {
    url: '/',
    templateUrl: 'templates/neighbourhood.html',
    controller:'NeighbourhoodCtrl'
  });
  $stateProvider.state('about', {
    url: '/',
    templateUrl: 'templates/about.html',
    controller:'AboutCtrl'

  });
  $stateProvider.state('personal_settings', {
    url: '/',
    templateUrl: 'templates/personal_settings.html'
  });
  $stateProvider.state('kill_data', {
    url: '/',
    templateUrl: 'templates/kill_data.html'
  });
})


app.controller('ShareDataCtrl', function($scope) {
  $scope.todos = [
      {title: "Take out the trash", done: true},
      {title: "Do laundry", done: false},
      {title: "Start cooking dinner", done: false}
   ]
})

app.controller('PeaceBarometerCtrl', function($scope) {
  $scope.todos = [
      {title: "Take out the trash", done: true},
      {title: "Do laundry", done: false},
      {title: "Start cooking dinner", done: false}
   ]
})

app.controller('DiaryCtrl', function($scope) {
  $scope.todos = [
      {title: "Take out the trash", done: true},
      {title: "Do laundry", done: false},
      {title: "Start cooking dinner", done: false}
   ]
})

app.controller('PeaceRadarCtrl', function($scope) {
  $scope.todos = [
      {title: "Take out the trash", done: true},
      {title: "Do laundry", done: false},
      {title: "Start cooking dinner", done: false}
   ]
})

app.controller('NeighbourhoodCtrl', function($scope) {
  $scope.todos = [
      {title: "Take out the trash", done: true},
      {title: "Do laundry", done: false},
      {title: "Start cooking dinner", done: false}
   ]
})

app.controller('AboutCtrl', function($scope) {
  $scope.todos = [
      {title: "Take out the trash", done: true},
      {title: "Do laundry", done: false},
      {title: "Start cooking dinner", done: false}
   ]
})

app.controller('MyCtrl', function($scope, $timeout) {
    $scope.data = { 'mood' : '6' };
    
    var timeoutId = null;
    
    $scope.$watch('data.mood', function() {
        
        
        console.log('Has changed');
        
        if(timeoutId !== null) {
            console.log('Ignoring this movement');
            return;
        }
        
        console.log('Not going to ignore this one');
        timeoutId = $timeout( function() {
            
            console.log('It changed recently!');
            
            $timeout.cancel(timeoutId);
            timeoutId = null;
            
            // Now load data from server 
        }, 1000); 
        
        
    });
    
})



.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
