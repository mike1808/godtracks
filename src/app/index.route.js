function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('index', {
      url: '',
      abstract: true,
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('tracks', {
      url: '/',
      templateUrl: 'app/components/tracks/tracks.html',
      controller: 'TracksController',
      controllerAs: 'tracks'
    });

  $urlRouterProvider.otherwise('/');
}

export default routerConfig;
