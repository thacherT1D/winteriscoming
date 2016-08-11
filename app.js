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
        templateUrl: 'home.html'
      })
      .state('notHome', {
        url: '/notHome',
        templateUrl: 'notHome.html'
      })
  }])
