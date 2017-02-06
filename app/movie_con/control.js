(function(angular){
'use strict';

angular.module('movieApp.movie_con', 
  [
   'ngRoute',
   'moviecat.services.http'

  ])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/:category/:page', {
    templateUrl: 'movie_con/tab.html',
    controller: 'movieController'
  });
}])

.controller('movieController', [
	'$scope',
  '$route',
  '$routeParams',
  'HttpService',
	function($scope,$route,$routeParams,HttpService) {
       var count = 5;
       var page = parseInt($routeParams.page);
       var start = (page-1) * count;
       $scope.loading = true;
       $scope.selectData = [];
       $scope.message = '';
       $scope.title = '';
       $scope.totalCount = 0;
       $scope.totalPages = 0;
       $scope.currentPage = page;

       HttpService.jsonp('http://api.douban.com/v2/movie/'+$routeParams.category,
         {'start':start,'count':count},
         function(data){
          $scope.totalCount = data.total;
          $scope.totalPages = Math.ceil($scope.totalCount/count);
          $scope.selectData = data.subjects;
          $scope.title = data.title;
          $scope.loading = false;
          $scope.$apply();
         }
        );

       $scope.go = function(page){
          if(page >= 1 && page <= $scope.totalPages){
             $route.updateParams({page:page});
          }
       }
  }
  ]);

})(angular);

