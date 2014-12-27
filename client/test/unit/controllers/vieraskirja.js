'use strict';

describe('Controller: VieraskirjaCtrl', function () {

  // load the controller's module
  beforeEach(module('karvinenApp'));

  var VieraskirjaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VieraskirjaCtrl = $controller('VieraskirjaCtrl', {
      $scope: scope
    });
  }));
});
