'use strict';

/**
 * @ngdoc function
 * @name karvinenApp.controller:VieraskirjaCtrl
 * @description
 * # VieraskirjaCtrl
 * Controller of the karvinenApp
 */
angular.module('karvinenApp')
  .controller('VieraskirjaCtrl', function ($scope, $q, $http) {
     
      $scope.sendMessage = function () {
	   	
	   	console.log('sendMessage')
	   	var deferred = $q.defer();

	   	$http.post('/message', {msg: 'sendMessage here'})
	   		.success(function(data){

	   			deferred.resolve();
	   		}).
   		error(function(data){
   			console.log(data);
   			deferred.reject(data);
   		});

   		return deferred.promise;
   }

   return {
   	sendMessage: $scope.sendMessage
   }
  
  });
