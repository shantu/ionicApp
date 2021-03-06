// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var IonicDemoApp = angular.module('starter', ['ionic', 'starter.controllers'])

IonicDemoApp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
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
});

IonicDemoApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
		url: '/app',
		abstract: true,
		templateUrl: 'templates/menu.html',
		controller: 'AppCtrl'
	})

	.state('app.search', {
		url: '/search',
		views: {
			'menuContent': {
				templateUrl: 'templates/search.html'
			}
		}
	})

	.state('app.dashboard', {
		url: '/dashboard',
		views: {
			'menuContent': {
				templateUrl: 'templates/dashboard.html'
			}
		}
	})

	.state('app.login', {
		url: '/login',
		views: {
			'menuContent': {
				templateUrl: 'templates/login.html',
				controller: 'AppCtrl'
			}
		}
	})
	
	.state('app.browse', {
		url: '/browse',
		views: {
			'menuContent': {
				templateUrl: 'templates/browse.html'
			}
		}
    })
	
    .state('app.notifications', {
		url: '/notifications',
		views: {
			'menuContent': {
				templateUrl: 'templates/notifications.html',
				controller: 'OrdersCtrl'
			}
		}
    })
	
	.state('app.single', {
		url: '/notifications/:playlistId',
		views: {
  		    'menuContent': {
				templateUrl: 'templates/notification.html',
				controller: 'OrderDetailsCtrl'
			}
		}
	});
	
	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/app/login');
});
