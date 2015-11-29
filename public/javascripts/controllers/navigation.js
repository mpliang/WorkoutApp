var app = angular.module('fantasyFitness')
.controller('NavCtrl', ['$scope', 'auth','$location', function($scope, auth, $location) {
  $scope.isLoggedIn = auth.isLoggedIn;
  $scope.currentUser = auth.currentUser();

  $scope.logOut = function(){
    auth.logOut;
    localStorage.clear();
    $location.path('/login')
  }
  var songIndex = Math.ceil(Math.random()*6);
  var songs = ["violin.mp3", "stronger.mp3", "boom.mp3", "blank.m4a", "energy.mp3", "dynamite.m4a", "charlesqueen.m4a"]
  var currentSong = new Audio("music/" + songs[songIndex])
  $scope.playStatus = true;
  $scope.playPause = function() {
    if (!$scope.playStatus) currentSong.pause();
    else currentSong.play();
    $scope.playStatus = !$scope.playStatus;
  }
  $scope.stopSong = function() {
    currentSong.pause();
    currentSong.currentTime = 0;
    $scope.playStatus = true;
  }
  $scope.previousSong = function() {
    currentSong.pause()
    console.log(songIndex);
    if (songIndex === 0) {
      songIndex = songs.length - 1;
    } else {
      songIndex -= 1;
    }
    currentSong = new Audio("music/" + songs[songIndex]);
    currentSong.play();
    $scope.playStatus = false;
  }
  $scope.nextSong = function() {
    console.log(songIndex);
    currentSong.pause()
    if (songIndex === songs.length -1) {
      songIndex = 0;
    } else {
      songIndex += 1;
    }
    currentSong = new Audio("music/" + songs[songIndex]);
    currentSong.play();
    $scope.playStatus = false;
  }
  $scope.fastForward = function() {
    currentSong.pause();
    currentSong.currentTime += 10;
    currentSong.play();
  }
  $scope.rewind = function() {
    currentSong.pause();
    currentSong.currentTime -= 10;
    currentSong.play();
  }
  $scope.playThrough = function() {
    setTimeout($scope.nextSong, currentSong.duration * 1000);
  };
}]);
