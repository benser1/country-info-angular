// var app = angular.module('countryInfo', ['templates'])

// // Factory

//   app.factory('CountryFactory', function($http) {
//     var data = {};
//     var url = "https://restcountries-v1.p.mashape.com/name/germany";

//     data.LoadCountry = function() {
//       return $http.get(url, {
//         headers: {
//           "X-Mashape-Key" : "bd7d3zQHwRmshUFZqeaTpuFT3Nv7p1Rz6nCjsnmGF4IbZLJoKy"
//         }
//       });
//     }
//     return data
//    });



// //Controller 

//   app.controller('CountryController', ['$scope', 'CountryFactory', function($scope, CountryFactory){
//     $scope.country;
//     // debugger;

//     CountryFind();

    // function CountryFind() {
    //   CountryFactory
    //     .LoadCountry()
    //     .success(function(data) {
    //       $scope.country = data;
    //       // countryPush();
    //     })
//         .error(function(data, status, header, config) {
//           console.log(data);
//           console.log(status);
//           console.log(headers);
//           console.log(config);
//         });
//     }
//     // function countryPush() {
//     //   angular.forEach($scope.country, function(country){
//     //     angular.forEach(country.data, function(info){
//     //         $scope.information.push(info);
//     //     });
//     //   });
//     // }

//   }]);

//   unirest.get("https://restcountries-v1.p.mashape.com/name/switzerland")
//     .header("X-Mashape-Key", "bd7d3zQHwRmshUFZqeaTpuFT3Nv7p1Rz6nCjsnmGF4IbZLJoKy")
//     .header("Accept", "text/plain")
//     .end(function (result) {
//       console.log(result.status, result.headers, result.body);
//     });


//////////////// TEST /////////////////////

angular
.module('musicInfo', []);
  



















