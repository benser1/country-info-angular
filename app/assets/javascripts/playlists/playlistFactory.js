angular
  .module('musicInfo')
  .factory('playlists', ['$http', function($http){
    var o = {
      playlists: []
    };

    o.getAll = function() {
      return $http.get('/playlists.json').success(function(data){
        angular.copy(data, o.playlists);
      });
    };

    o.create = function(playlist) {
      return $http.post('/playlists.json', playlist).success(function(data){
        o.playlists.push(data);
      });
    };
    o.get = function(id) {
      return $http.get('/playlists/' + id + '.json').then(function(res) {
        return res.data;
      });
    };
    o.destroy = function(playlist) {
    return $http.delete('/playlists/' + playlist.id + '.json').success(function(data) {
      o.playlists.splice(o.playlists.indexOf(playlist), 1);
    });
  };

    return o;
  }])