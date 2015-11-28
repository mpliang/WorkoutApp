var app = angular.module('fantasyFitness')
.controller('IndexCtrl', ['$scope', 'auth', function($scope, auth) {
  $scope.isLoggedIn = auth.isLoggedIn;
  $scope.currentUser = auth.currentUser();
  $scope.logOut = auth.logOut;
  console.log("INDEX CTRL WORKING");
}]);
