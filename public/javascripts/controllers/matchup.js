var app = angular.module('fantasyFitness')
    .config(['$stateProvider', function($stateProvider) {

    }])
    .controller('MatchupCtrl', ['$scope', 'FitlogService', 'auth', function($scope, FitlogService, auth) {
       $scope.dates = getWeek();
        $scope.dateRange = [$scope.dates[0],$scope.dates[6]];
          function getWeek() {
        var today = new Date(),
            sun = today.getDate() - today.getDay(),
            mon = sun + 1,
            tue = sun + 2,
            wed = sun + 3,
            thu = sun + 4,
            fri = sun + 5,
            sat = sun + 6;
        return [
            new Date(today.setDate(sun)),
            new Date(today.setDate(mon)),
            new Date(today.setDate(tue)),
            new Date(today.setDate(wed)),
            new Date(today.setDate(thu)),
            new Date(today.setDate(fri)),
            new Date(today.setDate(sat))
        ];
    }
      var pre = function(){FitlogService.getUserLogs().success(function(data) {
        for(var i=0; i<data.length; i++){
          if(data[i].ownerName === auth.currentUser()){
            $scope.me = data[i]
          }
        }})}
      pre();
//      
      var get = function(){FitlogService.getUserLogs().success(function(data) {
        var rawData = data
        console.log(rawData)
        for(var i=0; i<rawData.length; i++){
          if($scope.me.matchUp === undefined){
             var randomUser = function(a){
                var randomNumber = Math.floor((Math.random() * a.length))
                return randomNumber;
              }
        
              var makeMatch = function(){FitlogService.matchUp($scope.me, data[randomMatchupNumber]).success(function(data){
                console.log(data)
                 $scope.matchUpName = data.matchUp[0].matchup
                 $scope.matchUpScore = data.matchUp[0].score
               })};
            var randomMatchupNumber = randomUser(data)
            if (data[randomMatchupNumber].ownerName !== $scope.me.ownerName && data[randomMatchupNumber].matchUp === undefined){
              makeMatch();
              pre();
          } 
        
        } else {
           for(var i=0; i<rawData.length; i++){
             if(data[i].ownerName === auth.currentUser()){
               $scope.matchUpName = data[i].matchUp.ownerName
               $scope.matchupScore = data[i].matchUp.totalPoints
             }
           }
        }
      }})}
      get();

//      
      }]);

