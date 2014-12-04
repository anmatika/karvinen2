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

   function getSlides() {
   	$http.post('/galleria/images')
   		.success(function(data){
   			// data comes as
   			// images: {
   			// 	"foldername_1": ["foo.png", "daa.png"],
   			// 	"foldername_2": ["abc.png"], "fii.png"]
   			// }
   			var slides = [];
   			var slideHeaders = [];
   			var img;
   			// iterate properties(folders) of object "galleria_1", galleria_2...
   			for (var folder in data.images){
   				console.log("folder: " + folder);
   				var fileNames = data.images[folder];
   				slideHeaders.push(folder);
   				console.log(fileNames);
   				// iterate array of fileNames
   				for (var i in fileNames){
   					var fileName = fileNames[i];
				 	console.log(fileName);
				 	img = {
   					 	"image": "/images/galleria/" + folder + "/" + fileName
   					 }
   					console.log(img);
   					slides.push(img);   					
   				}
   			}

   			console.log(slides);
   			console.log(slideHeaders);
   			$scope.slideItems = [
   					{ 
   						header: "galleria_1",
   					  	images: [ 
   							{image: '/images/galleria/galleria_1/1.jpg'},
   							{image: '/images/galleria/galleria_1/2.jpg'}
						]
					},
					{ 
   						header: "2",
   					  	images: [ 
   							{ image: '/images/galleria/2/2.jpg' },
   							{ image: '/images/galleria/2/3.jpg'}
						]
					}
   			]
   		}).
   		error(function(data){
   			console.log(data);
   		});
   }
   
   // var promise = prepareSlides();
   // promise.then(function(images){
   // 		console.log('galleria response :' + images.msg);
   //  	$scope.slides = images.images_1;	
   //  	$scope.slides2 = images.images_2;	
   // }, function(reason){
   // 		console.log(reason);
   // });

   getSlides();

 });
