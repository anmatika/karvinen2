'use strict';

describe('Controller: JaseneksiliittyminenCtrl', function () {

  // load the controller's module
  beforeEach(module('karvinenApp'));

  var JaseneksiliittyminenCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JaseneksiliittyminenCtrl = $controller('JaseneksiliittyminenCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
