var app = angular.module('fantasyFitness')
.controller('NavCtrl', ['$scope', 'auth','$location', function($scope, auth, $location) {
  $scope.isLoggedIn = auth.isLoggedIn;
  $scope.currentUser = auth.currentUser();
  $scope.logOut = function(){
    auth.logOut;
    localStorage.clear();
    $location.path('/login')
  } 
  var songs = ["violin.mp3", "stronger.mp3", "boom.mp3", "blank.m4a", "energy.mp3", "dynamite.m4a", "charlesqueen.m4a"]
  var currentSong = new Audio("music/" + songs[Math.ceil(Math.random()*6)])
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
