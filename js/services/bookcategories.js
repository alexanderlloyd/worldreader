app.service('bookcategories', ['$http', function($http) {
  return {
    getAllBooks: function(id) {
      return $http.get('http://52.41.65.211:8028/api/v1/categories/'+ id + '/books.json')
     }
  }
}]);
