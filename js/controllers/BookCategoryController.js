app.controller('BookCategoryController', ['$scope', 'bookcategories', '$routeParams',  function($scope, bookcategories, $routeParams) {
  $scope.id = $routeParams.categoryId;
  bookcategories.getAllBooks($scope.id).then(function(response) {
     $scope.detail = response.data.books;
  });
}]);
