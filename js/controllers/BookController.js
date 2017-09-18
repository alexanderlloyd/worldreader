app.controller('BookController', ['$scope', 'books', '$routeParams',  function($scope, books, $routeParams) {
	books.success(function(data) {
    $scope.detail = data.books[$routeParams.bookId];
  	$scope.currentBookIndex = parseInt($routeParams.bookId);

		$scope.myBooksDetails = $scope.book;
	});
}]);
