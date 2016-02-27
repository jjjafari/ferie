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
		
		$http.get('http://localhost:8080/login').
        success(function(data) {
            $scope.login = data;
			alert(data);
            //$scope.greeting = data;
        });
		
		if($scope.username == 'admin' && $scope.password == 'admin') {
			$rootScope.loggedIn = true;
			$location.path('/dashboard');
		} else {
			alert('Wrong stuff');
		}
		
	};
});