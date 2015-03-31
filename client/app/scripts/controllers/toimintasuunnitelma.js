'use strict';

/**
 * @ngdoc function
 * @name karvinenApp.controller:ToimintasuunnitelmaCtrl
 * @description
 * # ToimintasuunnitelmaCtrl
 * Controller of the karvinenApp
 */
angular.module('karvinenApp')
	.controller('ToimintasuunnitelmaCtrl', function($scope, galleriaSvc) {
		$scope.getToimintasuunnitelmat = function() {
			galleriaSvc.getPdfs('toimintasuunnitelmat')
				.then(function(toimintasuunnitelmat) {
						console.log('toimintasuunnitelmat: ' + toimintasuunnitelmat);
						$scope.toimintasuunnitelmat = toimintasuunnitelmat;
					},
					function(reason) {
						console.log(reason);
					});
		}

		$scope.getToimintasuunnitelmat();
	});