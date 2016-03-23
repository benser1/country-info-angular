 function MusicController($scope, $http) {

      // $scope.playlists = playlists.playlists[$stateParams.id];

      // $scope.addPlaylist = function() {
      //   if(!$scope.name || $scope.name === '') { return; }

      //   $scope.playlists.push({title: $scope.name});

      //   $scope.name = '';
      // };
      $scope.$watch('name', function() {
        fetch();
      });

      $scope.name = '';

      function fetch() {
        $http.get("https://deezerdevs-deezer.p.mashape.com/search?q=" + $scope.name, {
          headers: {
            "X-Mashape-Key" : "iqmUgMu5uxmshAf9FL5keI4EPSnpp1zQlVmjsnwdw5wchx92WG"
          }
        })
          .then(function(response) {
            $scope.music = response.data.data;
          });
      };
    };

 angular 
  .module('musicInfo')
  .controller('MusicController', MusicController);