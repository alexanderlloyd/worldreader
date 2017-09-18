var app = angular.module('ReaderApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
  	.when('/books', {
    	controller: 'BookshelfController',
    	templateUrl: 'views/bookshelf.html'
  })
  	.when('/books/:bookId', {
    	controller: 'BookController',
    	templateUrl: 'views/book.html'
  })
   .when('/categories', {
      controller: 'CategoryController',
      templateUrl: 'views/categories.html'
  })
  .when('/categories/:categoryId', {
    controller: 'BookCategoryController',
    templateUrl: 'views/booksincategory.html'
})
  .when('/bookdetail/:bookId', {
    controller: 'BookDetailController',
    templateUrl: 'views/book.html'
  })
  	.otherwise({
    	redirectTo: '/categories'
  });
});
