'use strict';

describe('Controller: PalauteCtrl', function () {

  // load the controller's module
  beforeEach(module('karvinenApp'));

  var PalauteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PalauteCtrl = $controller('PalauteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
