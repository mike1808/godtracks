function routerConfig($stateProvider, $urlRouterProvider) {
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
      parent: 'index',
      views: {
        content: {
          templateUrl: 'app/components/tracks/tracks.html',
          controller: 'TracksController',
          controllerAs: 'tracks'
        }
      }
    })
    .state('tracks.add', {
      templateUrl: 'app/components/tracks/add.html'
    });

  $urlRouterProvider.otherwise('/');
}

export default routerConfig;
