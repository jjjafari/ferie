function Hello($scope, $http) {
	alert('paa toppen');
    $http.get('http://127.0.0.1:3000/login').
        success(function(data) {
            $scope.login = data;
			alert('test');
            //$scope.greeting = data;
        });
}