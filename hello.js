function Hello($scope, $http) {
    $http.get('http://localhost:3000/login').
        success(function(data) {
            $scope.login = data;
        });
}