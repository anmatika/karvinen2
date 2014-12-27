'use strict';

describe('Controller: NuoretCtrl', function () {

  // load the controller's module
  beforeEach(module('karvinenApp'));

  var NuoretCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NuoretCtrl = $controller('NuoretCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
