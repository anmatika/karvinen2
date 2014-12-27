'use strict';

describe('Controller: JasenkyselyCtrl', function () {

  // load the controller's module
  beforeEach(module('karvinenApp'));

  var JasenkyselyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JasenkyselyCtrl = $controller('JasenkyselyCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
