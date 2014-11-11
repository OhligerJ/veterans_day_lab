var galleryApp = angular.module('galleryApp', ['ngResource']);

galleryApp.controller('AppCtrl', function AppCtrl($scope){

	$scope.username = "jon";
	//define model
	var gallery1 = [
		{src: '/images/dolphin1.jpg'},
		{src: '/images/dolphin2.jpg'},
		{src: '/images/dolphin3.jpg'},
		{src: '/images/dolphin4.jpg'},
		{src: '/images/dolphin5.jpg'},
		{src: '/images/sunset1.jpg'},
		{src: '/images/sunset2.jpg'},
		{src: '/images/dolphin6.jpg'}
		];

	var gallery2 = [
		{src: '/images/sunset1.jpg'},
		{src: '/images/sunset2.jpg'},
		{src: '/images/sunset3.jpg'},
		{src: '/images/sunset4.jpg'},
		{src: '/images/sunset5.jpg'},
		{src: '/images/sunset6.jpg'},
		{src: '/images/sunset7.jpg'}
		];

	// publish to scope
	$scope.gallery = gallery1;
	$scope.sunsets = gallery2;

	$scope.galleries = ['gallery', 'sunsets'];
	$scope.selection = $scope.galleries[0];

	$scope.add = function(src){
		var item = {src: src};
		gallery1.push(item);
		console.log(gallery1);
	};

	$scope.$watch('selection', function(newV, oldV){
		console.log("selectin changed")
		var container = document.querySelector('#container');
		var msnry;
		// initialize Masonry after all images have loaded
		imagesLoaded( container, function() {
			console.log("images loaded");
		 	msnry = new Masonry( container, {
			  columnWidth: 150,
			  itemSelector: '.item',
			  gutter: 2
			});
		});
	});
		

});
