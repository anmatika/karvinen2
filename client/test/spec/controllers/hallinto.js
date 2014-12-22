'use strict';

describe('Controller: HallintoCtrl', function () {

  // load the controller's module
  beforeEach(module('karvinenApp'));

  var HallintoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HallintoCtrl = $controller('HallintoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
