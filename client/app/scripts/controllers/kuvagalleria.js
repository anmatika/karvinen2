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

	   $scope.myInterval = 5000;

	    $http.get('images/galleria/1.json').
	    success(function(data, status, headers, config) {
	      $scope.slides1 = data;
	    }).
	    error(function(data, status, headers, config) {
	      // log error
	    });

	    $http.get('images/galleria/2.json').
	    success(function(data, status, headers, config) {
	      $scope.slides2 = data;
	    }).
	    error(function(data, status, headers, config) {
	      // log error
	    });
   }

   function prepareSlides_Hardcoded() {  

	var slides = $scope.slides1 = [
		{
			image: '/images/galleria/1/1.jpg'
		},
		{
			image: '/images/galleria/1/2.jpg'
		},
		{
			image: '/images/galleria/1/3.jpg'
		},
		{
			image: '/images/galleria/1/4.jpg'
		},
		{
			image: '/images/galleria/1/5.jpg'
		},
		{
			image: '/images/galleria/1/6.jpg'
		}
   ];

   $scope.slides2 = [
		{
			image: '/images/galleria/2/2.jpg'
		},
		{
			image: '/images/galleria/2/3.jpg'
		},
		{
			image: '/images/galleria/2/4.jpg'
		}	
   	];
		
   }
   
   prepareSlides_Hardcoded();

   return {
   		prepareSlides: prepareSlides
   	};
     
 });