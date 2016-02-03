var myApp = angular.module('myApp', [
	'ngRoute',
	'listControllers'
]);

myApp.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.
    when('/personal', {
		templateUrl: 'partials/personal.html'
	}).
    when('/work', {
		templateUrl: 'partials/work.html'
	}).
    when('/school', {
		templateUrl: 'partials/school.html'
	}).
	otherwise({
		redirectTo: '/personal'
		});
}]);