
var IonicDemoApp = angular.module('starter.controllers', ['starter.services'])

IonicDemoApp.controller('AppCtrl', function($scope, $ionicModal, $timeout ,$state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  $scope.close = function(data) { 
		$state.go('app.dashboard');
  };
  
  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
IonicDemoApp.controller('OrdersCtrl', function($scope, restServices) {
	
	$scope.isWait = false;
	$scope.loadOrders = function() {
		console.log("Inside Orders Ctrl...");
		var response = restServices.getOrders();
		response.success(function(data) {
			$scope.notifications = data;
			$scope.isWait = true;			
		});
		response.error(function(data, status) {
			$scope.isWait = true;
			console.log("Failed to retrive order list");
		});
	};
	/*
  $scope.notifications = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
  */
})

IonicDemoApp.controller('OrderDetailsCtrl', function($scope, restServices, $stateParams) {
	$scope.isWait = false;
	$scope.loadOrderDetails = function() {
		console.log("Inside OrderDetails Ctrl...");
		
		$scope.OrderID = "11060357";
		$scope.MembershipBusinessName = "K NAGA RAJU";
		
		var response = restServices.getOrderDetails();
		response.success(function(data) {
			$scope.orderdetails = data;
			$scope.isWait = true;			
		});
		response.error(function(data, status) {
			$scope.isWait = true;
			console.log("Failed to retrive order list");
		});
	};	
});
