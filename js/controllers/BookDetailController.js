app.controller('BookDetailController', ['$scope', 'bookdetail', '$routeParams',  function($scope, bookdetail, $routeParams) {
  $scope.id = $routeParams.bookId;
  bookdetail.getBookDetail($scope.id).then(function(response) {
     $scope.detail = response;
  });
}]);
