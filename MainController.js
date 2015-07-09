app.controller('MainController', function($scope) { 
	$scope.sampleText = "People List";
	$scope.navbarCollapsed = true;
	
	$scope.addItem = function (name, age, gender) {
		if(name===null){
			name = "none";
		}
		if(age===null){
			age = 0;
		}
		if(gender===null){
			gender = "none";
		};
		$scope.sampleArray.push({
			name,
			age,
			gender
		});	
		this.scope.name=null; 
		this.scope.age=null;
		this.scope.gender=null;		
	};		
			
	$scope.sampleArray = [
		{name:'John', age:25, gender:'M'},
		{name:'Aaron', age:83, gender:'M'},
		{name:'Jessie', age:30, gender:'F'},
		{name:'Johanna', age:28, gender:'F'},
		{name:'Joy', age:15, gender:'F'},
		{name:'Mary', age:28, gender:'F'},
		{name:'Peter', age:95, gender:'M'},
		{name:'Sebastian', age:50, gender:'M'},
		{name:'Erika', age:27, gender:'F'},
		{name:'Patrick', age:40, gender:'M'},
		{name:'James', age:40, gender:'M'},
		{name:'Spock', age:45, gender:'M'},
		{name:'Leonard', age:32, gender:'M'},
		{name:'Montgomery', age:53, gender:'M'},
		{name:'Nyota', age:38, gender:'F'},
		{name:'Hikaru', age:37, gender:'M'},
		{name:'John', age:67, gender:'M'},
		{name:'Jessie', age:87, gender:'F'},
		{name:'Johanna', age:13, gender:'F'},
		{name:'Joy', age:90, gender:'F'},
		{name:'Mary', age:100, gender:'F'},
		{name:'Peter', age:32, gender:'M'},
		{name:'Sebastian', age:2, gender:'M'},
		{name:'Erika', age:59, gender:'F'},
		{name:'Patrick', age:6, gender:'M'},
		{name:'Samantha', age:60, gender:'F'},
		{name:'Scott', age:20, gender:'M'},
		{name:'Craig', age:23, gender:'M'},
		{name:'Cindy', age:51, gender:'F'},
		{name:'Karen', age:64, gender:'F'},
		{name:'Cathy', age:50, gender:'F'},
		{name:'Edward', age:56, gender:'M'},
		{name:'Carl', age:20, gender:'M'},
		{name:'Diana', age:27, gender:'F'},
		{name:'Mark', age:40, gender:'M'},
		{name:'Adam', age:21, gender:'M'},
		{name:'Ham', age:25, gender:'M'},
		{name:'Kira', age:30, gender:'F'},
		{name:'Micheala', age:28, gender:'F'},
		{name:'Harmony', age:15, gender:'F'},
		{name:'Mary', age:56, gender:'F'},
		{name:'Sven', age:95, gender:'M'},
		{name:'George', age:50, gender:'M'},
		{name:'Kalipto', age:27, gender:'F'},
		{name:'Tungsten', age:40, gender:'M'},
		{name:'Lima', age:60, gender:'F'},
		{name:'Bjorn', age:20, gender:'M'},
		{name:'Rollo', age:45, gender:'M'},
		{name:'Lagertha', age:52, gender:'F'},
		{name:'Dani', age:63, gender:'F'},
		{name:'Opera', age:50, gender:'F'},
		{name:'Ragnar', age:48, gender:'M'},
		{name:'Andrew', age:20, gender:'M'},
		{name:'Penelope', age:27, gender:'F'},
		{name:'Anakin', age:40, gender:'M'},
		{name:'Luke', age:32, gender:'M'},
		{name:'Leia', age:32, gender:'F'},
		{name:'Obi-wan', age:55, gender:'M'},
		{name:'Yoda', age:900, gender:'M'},
		{name:'Beth', age:40, gender:'F'},
		{name:'Locke', age:48, gender:'M'}
	];
});