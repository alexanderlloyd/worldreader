app.service('bookdetail', ['$http', function($http) {
  return {
    getBookDetail: function(id) {
      return $http.get('http://52.41.65.211:8028/api/v1/books/'+ id + '.json')
     }
  }
}]);
