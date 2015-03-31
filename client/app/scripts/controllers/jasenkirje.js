'use strict';

/**
 * @ngdoc function
 * @name karvinenApp.controller:JasenkirjeCtrl
 * @description
 * # JasenkirjeCtrl
 * Controller of the karvinenApp
 */
angular.module('karvinenApp')
  .controller('JasenkirjeCtrl', function ($scope, galleriaSvc) {
    $scope.getJasenkirjeet = function() {
			galleriaSvc.getPdfs('jasenkirjeet')
				.then(function(jasenkirjeet) {
						console.log('Jasenkirjeet: ' + jasenkirjeet);
						$scope.jasenkirjeet = jasenkirjeet;
					},
					function(reason) {
						console.log(reason);
					});
		}

		$scope.getJasenkirjeet();
  });
