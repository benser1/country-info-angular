function PlaylistsCtrl($scope, $state, $stateParams, playlists) {

   $scope.playlists = playlists.playlists;
   $scope.id = $state.params.id;

   $scope.destroy = function(playlist) {
      playlists.destroy(playlist);
    };

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