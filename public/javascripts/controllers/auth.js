var app = angular.module('fantasyFitness')
    .controller('AuthCtrl', ['$scope', '$state', 'auth', '$location', function($scope, $state, auth, $location){
        $scope.user = {};

        $scope.register = function(){
            auth.register($scope.user).error(function(error) {
                $scope.error = error;
            }).then(function(){
                $state.go('home');
            });
        };
        $scope.logIn = function(){
            auth.logIn($scope.user).error(function(error){
                $scope.error = error;
            }).then(function(){
              $location.path('/home')
              $scope.$digest()
            });
        };
}]);