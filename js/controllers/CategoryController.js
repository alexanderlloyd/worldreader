app.controller('CategoryController', ['$scope', 'categories',  function($scope, categories) {
	categories.success(function(data) {
    $scope.myCategories = data.categories;
  });
}]);
