function PlaylistsCtrl($scope, $stateParams, playlists) {

   $scope.playlists = playlists.playlists;

      $scope.addPlaylist = function() {
        if(!$scope.name || $scope.name === '') { return; }

        playlists.create({
          name: $scope.name
        });

        $scope.name = '';
      };  
}

 angular 
  .module('musicInfo')
  .controller('PlaylistsCtrl', PlaylistsCtrl);