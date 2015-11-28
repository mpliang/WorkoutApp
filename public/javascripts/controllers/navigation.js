var app = angular.module('fantasyFitness')
.controller('NavCtrl', ['$scope', 'auth', function($scope, auth) {
  $scope.isLoggedIn = auth.isLoggedIn;
  $scope.currentUser = auth.currentUser();
  $scope.logOut = auth.logOut;
  var songs = ["violin", "stronger", "boom"]
  var songIndex = 1;
  var currentSong = new Audio("music/" + songs[songIndex] + ".mp3")
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
    currentSong = new Audio("music/" + songs[songIndex] + ".mp3");
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
    currentSong = new Audio("music/" + songs[songIndex] + ".mp3");
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

  // SPACE PAUSE
  $scope.keyControl = function() {
    console.log(event.charCode);
  }
}]);
