function Hello($scope, $http) {
	alert('paa toppen');
    $http.get('http://127.0.0.1:3000/login').
        success(function(data) {
<<<<<<< HEAD
            $scope.login = data;
=======
			alert('test');
            //$scope.greeting = data;
>>>>>>> 4c8ed9dc6814684f886685d47c4abb223465ee9e
        });
}