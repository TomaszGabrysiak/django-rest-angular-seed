/**
 * Created by Tomasz Gabrysiak on 2016-03-12.
 */


var app = angular.module("myRestApp", []);

app.controller("MyRestAppCtrl", function($scope) {
  $scope.books = ["Book 1", "Book 2"];
  $scope.authors = ["Author 1", "Author 2", "Author 3", "Author 4"];
});

app.service('myRestAppApiService', ['$http', function ($http) {
  var apiUrlMapper = {
    getBooks: "/api/v1/books/",
    getAuthors: "/api/v1/authors/"
  };

  var books = [];
  var authors = [];

  return {
    getBooks: function () {
      return $http.get(apiUrlMapper.getBooks);
    },
    getAuthors: function () {
      return $http.get(apiUrlMapper.getAuthors);
    }
  };
}]);

