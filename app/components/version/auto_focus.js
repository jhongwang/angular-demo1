(function(angular){
  var module = angular.module('movie.directive.auto-focus',[]);
  module.directive('autoFocus',['$location',function($location){
  	var path = $location.path();
  	return {
        link : function(scope, element, attrs) {
        	var href = element.children().attr('href');
        	var type = href.replace(/#(\/.+?)\/\d+/,'$1');
        	if(path.startsWith(type)){
        		element.addClass('active');
        	}
        	element.on('click',function(){
        		element.parent().children().removeClass('active');
        		element.addClass('active');
        	})
        }
    }
  }])

})(angular);