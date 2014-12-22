'use strict';

describe('Controller: JasenedutCtrl', function () {

  // load the controller's module
  beforeEach(module('karvinenApp'));

  var JasenedutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JasenedutCtrl = $controller('JasenedutCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
