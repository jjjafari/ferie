var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'login.html'
	})
	.when('/dashboard', {
		resolve: {
			"check": function($location, $rootScope) {
				if (!$rootScope.loggedIn) {
					$location.path('/');
				}
			}
		},
		templateUrl: 'dashboard.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});

app.controller('loginCtrl', function($scope, $location, $rootScope, $http) {
	$scope.submit = function() {
		alert('Username: ' + $scope.username + '\nPassword: ' + $scope.password);
		$http.get('http://localhost:8080/login?username=' + $scope.username + '&password=' + $scope.password).
        success(function(data) {
            $scope.login = data;
			alert('Status: ' + $scope.login.status + '\nMessage: ' + $scope.login.message);
            //$scope.greeting = data;
        });
		
		if($scope.login.status == 'ok') {
			$rootScope.loggedIn = true;
			$location.path('/dashboard');
		} else {
			$rootScope.loggedIn = true;
			$location.path('/dashboard');
		}
		
	};
});

