// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('opener', {
    url: "/opener",
    templateUrl: "templates/opener.html"
  })

  .state('app.share_your_data', {
    url: "/share_your_data",
    views: {
      'menuContent': {
        templateUrl: "templates/share_your_data.html"
      }
    }
  })

  .state('app.about', {
    url: "/about",
    views: {
      'menuContent': {
        templateUrl: "templates/about.html"
      }
    }
  })

  .state('app.personal_settings', {
    url: "/personal_settings",
    views: {
      'menuContent': {
        templateUrl: "templates/personal_settings.html"
      }
    }
  })

  .state('app.kill_data', {
    url: "/kill_data",
    views: {
      'menuContent': {
        templateUrl: "templates/kill_data.html"
      }
    }
  })

  .state('app.partners', {
    url: "/partners",
    views: {
      'menuContent': {
        templateUrl: "templates/partners.html"
      }
    }
  })

  .state('app.peace_barometer', {
    url: "/peace_barometer",
    views: {
      'menuContent': {
        templateUrl: "templates/peace_barometer.html"
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('opener');
});

// Add the 'ionic.service.core' module to your main angular module:
// angular.module('test', ['ionic.service.core'])
// // Identify App
// .config(['$ionicAppProvider', function($ionicAppProvider) {
//   // Identify app
//   $ionicAppProvider.identify({
//     // The App ID for the server
//     app_id: '8e26ce6c',
//     // The API key all services will use for this app
//     api_key: '224c97f41cd5cc9d8bcdce0b55d75aa4a5e5ce671fabccf9'
//   });
// }]);
