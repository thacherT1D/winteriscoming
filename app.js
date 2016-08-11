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
      .state('tooBad', {
        url: '/tooBad',
        templateUrl: 'pages/tooBad.html'
      })
      .state('button1', {
        url: '/button1',
        templateUrl: 'pages/button1.html'
      })
      .state('button2', {
        url: '/button2',
        templateUrl: 'pages/button2.html'
      })
      .state('button3', {
        url: '/button3',
        templateUrl: 'pages/button3.html'
      })
      .state('button4', {
        url: '/button4',
        templateUrl: 'pages/button4.html'
      })
  }])
