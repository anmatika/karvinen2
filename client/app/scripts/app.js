'use strict';

/**
 * @ngdoc overview
 * @name karvinenApp
 * @description
 * # 
 *
 * Main module of the application.
 */
angular
  .module('karvinenApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ngMap',
    'zeroclipboard'
  ])
  .config(function ($routeProvider, uiZeroclipConfigProvider) {
  $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/ryhmat', {
        templateUrl: 'views/ryhmat.html',
        controller: 'RyhmatCtrl'
      })
      .when('/yhteystiedot', {
        templateUrl: 'views/yhteystiedot.html',
        controller: 'YhteystiedotCtrl'
      })
      .when('/retket', {
        templateUrl: 'views/retket.html'
      })
      .when('/kuvagalleria', {
        templateUrl: 'views/kuvagalleria.html',
        controller: 'KuvagalleriaCtrl'
      })
      .when('/ruokalista', {
        templateUrl: 'views/ruokalista.html',
        controller: 'RuokalistaCtrl'
      })
      .when('/vieraskirja', {
        templateUrl: 'views/vieraskirja.html',
        controller: 'VieraskirjaCtrl'
      })
      .when('/organisaatiokaavio', {
        templateUrl: 'views/organisaatiokaavio.html',
        controller: 'OrganisaatiokaavioCtrl'
      })
      .when('/hallinto', {
        templateUrl: 'views/hallinto.html',
        controller: 'HallintoCtrl'
      })
      .when('/missio', {
        templateUrl: 'views/missio.html',
        controller: 'MissioCtrl'
      })
      .when('/toimintasuunnitelma', {
        templateUrl: 'views/toimintasuunnitelma.html',
        controller: 'ToimintasuunnitelmaCtrl'
      })
      .when('/toimintakertomus', {
        templateUrl: 'views/toimintakertomus.html',
        controller: 'ToimintakertomusCtrl'
      })
      .when('/bussiyhteydet', {
        templateUrl: 'views/bussiyhteydet.html',
        controller: 'BussiyhteydetCtrl'
      })
      .when('/jasenyys', {
        templateUrl: 'views/jasenyys.html',
        controller: 'JasenyysCtrl'
      })
      .when('/jaseneksiliittyminen', {
        templateUrl: 'views/jaseneksiliittyminen.html',
        controller: 'JaseneksiliittyminenCtrl'
      })
      .when('/jasenedut', {
        templateUrl: 'views/jasenedut.html',
        controller: 'JasenedutCtrl'
      })
      .when('/jasenkysely', {
        templateUrl: 'views/jasenkysely.html',
        controller: 'JasenkyselyCtrl'
      })
      .when('/jasenkirje', {
        templateUrl: 'views/jasenkirje.html',
        controller: 'JasenkirjeCtrl'
      })
      .when('/nuoret', {
        templateUrl: 'views/nuoret.html',
        controller: 'NuoretCtrl'
      })
      .when('/linkit', {
        templateUrl: 'views/linkit.html',
        controller: 'LinkitCtrl'
      })
      .when('/palaute', {
        templateUrl: 'views/palaute.html',
        controller: 'PalauteCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
        // config ZeroClipboard
      uiZeroclipConfigProvider.setZcConf({
        swfPath: '../bower_components/zeroclipboard/dist/ZeroClipboard.swf'
      });

  });