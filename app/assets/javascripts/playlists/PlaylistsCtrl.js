function PlaylistsCtrl($scope, $stateParams, playlists) {

  $scope.playlists = [
    {name: $scope.name}
  ];

  $scope.addPlaylist = function() {
    if(!$scope.name || $scope.name === '') { return; }

    $scope.playlists.push({name: $scope.name});

    $scope.name = '';
  };

};

 angular 
  .module('musicInfo')
  .controller('PlaylistsCtrl', PlaylistsCtrl);