angular
  .module('musicInfo', ['ui.router', 'templates', 'Devise'])
  .factory('playlists', [function(){
    var o = {
      playlists: []
    };
    return o;
  }])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'home/_home.html',
          controller: 'MusicController'
        })
        .state('playlists', {
          url: '/playlists',   /// I need an index page and an individual playlists page
          templateUrl: 'playlists/_playlists.html',
          controller: 'PlaylistsCtrl'
        })
        .state('login', {
          url: '/login',
          templateUrl: 'auth/_login.html',
          controller: 'AuthCtrl',
          onEnter: ['$state', 'Auth', function($state, Auth) {
            Auth.currentUser().then(function() {
              $state.go('home');
            })
          }]
        })
        .state('register', {
          url: '/register',
          templateUrl: 'auth/_register.html',
          controller: 'AuthCtrl',
          onEnter: ['$state', 'Auth', function($state, Auth) {
            Auth.currentUser().then(function() {
              $state.go('home');
            })
          }]
        });

      $urlRouterProvider.otherwise('home');
    }])
  
  