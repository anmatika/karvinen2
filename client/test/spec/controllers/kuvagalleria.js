'use strict';

describe('Controller: KuvagalleriaCtrl', function () {

  // load the controller's module
  beforeEach(module('karvinenApp'));

  var KuvagalleriaCtrl,
    scope,
    $httpBackend,
    $controller,
    $rootScope;


  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    $httpBackend = $injector.get('$httpBackend');
    $controller = $injector.get('$controller');
    $rootScope = $injector.get('$rootScope');

    scope = $rootScope.$new();

    KuvagalleriaCtrl = $controller('KuvagalleriaCtrl', {
      $scope: scope
    });
  }));

// 
  it('KuvagalleriaCtrl.getSlides should been called', function () {
      // spyOn(KuvagalleriaCtrl, 'getSlides').and.callThrough();
  });

  it('Expect interval to be 5000', function() {
    expect(scope.myInterval).toBe(5000);
  });

  it('expect POST', function(){
    $httpBackend.expectGET('/galleria').respond(200, '');
    
  });

  it('', function(){

    var images = {
        "images": {
            "galleria_1": [
                "2.jpg",
                "3.jpg",
                "4.jpg"
            ],
            "galleria_2": [
                "1.jpg",
                "2.jpg",
                "3.jpg",
                "4.jpg",
                "5.jpg",
                "6.jpg"
            ]
        }
    }
    var authRequestHandler = $httpBackend.when('GET', '/galleria')
                            .respond(images);

    console.log(scope);
    


     // console.log(authRequestHandler);
  })
});
