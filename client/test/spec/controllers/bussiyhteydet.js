'use strict';

describe('Controller: BussiyhteydetCtrl', function () {

  // load the controller's module
  beforeEach(module('karvinenApp'));

  var BussiyhteydetCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BussiyhteydetCtrl = $controller('BussiyhteydetCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
