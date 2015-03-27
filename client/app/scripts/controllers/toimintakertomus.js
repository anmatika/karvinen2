'use strict';

/**
 * @ngdoc function
 * @name karvinenApp.controller:ToimintakertomusCtrl
 * @description
 * # ToimintakertomusCtrl
 * Controller of the karvinenApp
 */
angular.module('karvinenApp')
  .controller('ToimintakertomusCtrl', function ($scope, galleriaSvc) {
    $scope.getToimintakertomukset = function() {
			galleriaSvc.getToimintakertomukset()
				.then(function(toimintakertomukset) {
						console.log('Toimintakertomukset: ' + toimintakertomukset);
						$scope.toimintakertomukset = toimintakertomukset;
					},
					function(reason) {
						console.log(reason);
					});
		}

		$scope.getToimintakertomukset();
  });
