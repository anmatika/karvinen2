'use strict';
/** 
 * @ngdoc function
 * @name karvinenApp.controller:KuvagalleriaCtrl
 * @description
 * # KuvagalleriaCtrl
 * Controller of the karvinenApp
 */
 angular.module('karvinenApp')
 .controller('KuvagalleriaCtrl', function ($scope, $http, $q) {

	$scope.myInterval = 5000;
	   		  
    function prepareSlides() {  
	    var deferred = $q.defer();
	    
	    setTimeout(function(){ 
		   	// posting to our server/routes/foo
		   	$http.post('/galleria').success(function(data){
		   		deferred.resolve(data);	
		   	}).
		   	error(function(data){
		   		deferred.reject(data);	
		   	});
	   }, 1000);

	   return deferred.promise;
   }

   function folders() {
   	$http.post('/galleria/images')
   		.success(function(data){
   			console.log(data);			
   		}).
   		error(function(data){
   			console.log(data);
   		});
   }
   
   var promise = prepareSlides();
   promise.then(function(images){
   		console.log('galleria response :' + images.msg);
    	$scope.slides1 = images.images_1;	
    	$scope.slides2 = images.images_2;	
   }, function(reason){
   		console.log(reason);
   });

folders();

 });
