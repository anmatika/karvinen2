'use strict';
/** 
 * @ngdoc function
 * @name karvinenApp.controller:KuvagalleriaCtrl
 * @description
 * # KuvagalleriaCtrl
 * Controller of the karvinenApp
 */
 angular.module('karvinenApp')
 .controller('KuvagalleriaCtrl', function ($scope, $http) {
   		  
    function prepareSlides() {  
	    var images = {};
	   	// posting to our server/routes/foo
	   	$http.post('/foo').success(function(data){
	   		console.log('foo response :' + data.msg);
	   		images = data;
	   		$scope.myInterval = 5000;
	    	$scope.slides1 = images.images_1;	
	    	$scope.slides2 = images.images_2;	
	   	}).
	   	error(function(data){

	   	});
   }
   
   prepareSlides();
 });

