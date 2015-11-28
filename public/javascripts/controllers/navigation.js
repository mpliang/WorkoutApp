var app = angular.module('fantasyFitness')
.controller('NavCtrl', ['$scope', 'auth', function($scope, auth) {
  $scope.isLoggedIn = auth.isLoggedIn;
  $scope.currentUser = auth.currentUser();
  $scope.logOut = auth.logOut;
  var songs = ["violin", "stronger", "boom"]
  var currentSong = new Audio("music/" + songs[2] + ".mp3")
    $scope.playStatus = true;
  $scope.playPause = function() {
    console.log($scope.playStatus);
    console.log("Click!");
    if (!$scope.playStatus) currentSong.pause();
    else currentSong.play();
    $scope.playStatus = !$scope.playStatus;
  }
  $scope.slideOut = function() {
    
  }
}]);
