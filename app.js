angular
  .module('app', [
    'ui.router',
    'ngAnimate',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'pages/home.html'
      })
      .state('button1', {
        url: '/button1',
        templateUrl: 'pages/button1.html'
      })
  }])
