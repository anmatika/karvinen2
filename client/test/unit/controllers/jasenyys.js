'use strict';

describe('Controller: JasenyysCtrl', function () {

  // load the controller's module
  beforeEach(module('karvinenApp'));

  var JasenyysCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JasenyysCtrl = $controller('JasenyysCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
