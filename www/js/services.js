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
	
	return restAPI;
});

