'use strict';

describe('Controller: ToimintasuunnitelmaCtrl', function () {

  // load the controller's module
  beforeEach(module('karvinenApp'));

  var ToimintasuunnitelmaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ToimintasuunnitelmaCtrl = $controller('ToimintasuunnitelmaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
