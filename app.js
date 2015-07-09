var app = angular.module("myApp", []);

app.directive('peopleList', function() {
  return {
      restrict: 'AE',
      replace: 'true',
      template: '<p>People List</p>'
  };
});

angular.module("navbarapp",['controllers'])
	.directive('bootstrapNavbar', function(){
	return{
		restrict: 'E',
		replace: true,
		transclude: true,
		templateUrl: 'navBar.html'		
	}	
});