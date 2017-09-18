app.factory('categories', ['$http', function($http) {
  return $http.get('http://52.41.65.211:8028/api/v1/categories.json')
  	.success(function(data) {
    	return data;
  	})
  	.error(function(err) {
    	return err;
  });
}]);
