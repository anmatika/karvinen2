'use strict';

describe('Controller: JasenkirjeCtrl', function () {

  // load the controller's module
  beforeEach(module('karvinenApp'));

  var JasenkirjeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JasenkirjeCtrl = $controller('JasenkirjeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
