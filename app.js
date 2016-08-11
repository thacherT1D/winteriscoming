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
      .state('notHome', {
        url: '/notHome',
        templateUrl: 'pages/notHome.html'
      })
  }])
