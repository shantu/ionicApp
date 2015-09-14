'use strict';

var IonicDemoApp = angular.module('starter.services', []);

IonicDemoApp.factory('restServices', function($http) {
	var restAPI = {};

	restAPI.getOrders = function() {
	    return $http({
	    	method: 'GET',
			url: 'sample/orders.json'
	    });
	};

	restAPI.getOrderDetails = function() {
	    return $http({
	    	method: 'GET',
			url: 'sample/order_details.json'
	    });
	};
	
	return restAPI;
});

