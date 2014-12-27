'use strict';

describe('Controller: LinkitCtrl', function () {

  // load the controller's module
  beforeEach(module('karvinenApp'));

  var LinkitCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LinkitCtrl = $controller('LinkitCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
