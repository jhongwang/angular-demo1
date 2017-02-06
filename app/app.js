(function(angular){
'use strict';

// Declare app level module which depends on views, and components
angular.module('movieApp', [
  'ngRoute',
  'movieApp.movie_con',
  'movie.directive.auto-focus'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/in_theaters/1'});
}])
})(angular);


//这是获取跟location 判断左侧nav选中哪个
/*.controller('movieNavcontroller',['$scope','$location',function($scope,$location){
	$scope.type = '';
	$scope.$location = $location;
	$scope.$watch('$location.path()',function(now){
		if(now.startsWith('/top250')){
			$scope.type = 'top250';
		}else if(now.startsWith('/in_theaters')){
			$scope.type = 'in_theaters';
		}else if(now.startsWith('/coming_soon')){
			$scope.type = 'coming_soon';
		}
	})
}])*/