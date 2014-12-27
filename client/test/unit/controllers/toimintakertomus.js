'use strict';

describe('Controller: ToimintakertomusCtrl', function () {

  // load the controller's module
  beforeEach(module('karvinenApp'));

  var ToimintakertomusCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ToimintakertomusCtrl = $controller('ToimintakertomusCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
