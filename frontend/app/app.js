/**
 * Created by Tomasz Gabrysiak on 2016-03-12.
 */


var app = angular.module("myRestApp", []);

app.controller("MyRestAppCtrl", ['$scope', 'myRestAppApiService', function ($scope, myRestAppApiService) {

  $scope.books = ["Loading..."];
  $scope.authors = ["Loading"];

  myRestAppApiService.getBooks()
    .success(function (response, status) {
      $scope.books = [].concat(response);
    });

  myRestAppApiService.getAuthors()
    .success(function (response, status) {
      $scope.authors = [].concat(response);
    });
}]);

app.service('myRestAppApiService', ['$http', function ($http) {
  var apiUrlMapper = {
    getBooks: "http://localhost:8000/books/",
    getAuthors: "http://localhost:8000/authors/"
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

