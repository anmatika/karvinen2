'use strict';

describe('Controller: KuvagalleriaCtrl', function () {

  // load the controller's module
  beforeEach(module('karvinenApp'));

  var KuvagalleriaCtrl,
    scope;


  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KuvagalleriaCtrl = $controller('KuvagalleriaCtrl', {
      $scope: scope
    });
  }));

// 
  it('KuvagalleriaCtrl.prepareSlides should been called', function () {
      spyOn(KuvagalleriaCtrl, 'prepareSlides').and.callThrough();
  });

  it('Expect interval to be 5000', function() {
  //  expect(scope.myInterval).toBe(5000);
  });
});
