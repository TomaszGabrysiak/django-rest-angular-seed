/**
 * Created by Tomasz Gabrysiak on 2016-03-12.
 */


var app = angular.module("myRestApp", []);

app.config(function($httpProvider) {


  $httpProvider.defaults.xsrfCookieName = 'csrftoken';
  $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
  //$httpProvider.defaults.withCredentials = true;

});

app.controller("MyRestAppCtrl", ['$scope', 'myRestAppApiService', function ($scope, myRestAppApiService) {

  $scope.books = ["Loading..."];
  $scope.authors = [{"first_name": "Loading..."}];
  

  myRestAppApiService.getCSRF();

  $scope.newAuthor = {
    first_name: '',
    last_name: '',
    description: ''
  };

  $scope.loginData = {
    username: 'testuser',
    password: 'testpassword'
  };

  $scope.doLogin = function () {
    console.log('do login');
    myRestAppApiService.login($scope.loginData)
      .success(function (response, status) {
        console.log('success');
      });
  };

  $scope.doLogout = function () {
    console.log('do logout');
    myRestAppApiService.logout()
      .success(function (response, status) {
        console.log('success');
      });
  };

  $scope.addAuthor = function () {
    myRestAppApiService.addAuthor($scope.newAuthor)
      .success(function (response, status) {
        $scope.authors.push($scope.newAuthor);
        $scope.newAuthor = {
          first_name: '',
          last_name: '',
          description: ''
        };
      });
  };

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
    login: "http://localhost:8000/api-token-auth/",
    logout: "http://localhost:8000/api-auth/logout/",
    getBooks: "http://localhost:8000/api/books/",
    getAuthors: "http://localhost:8000/api/authors/",
    addAuthor: "http://localhost:8000/api/authors/"
  };

  var books = [];
  var authors = [];

  return {
    login: function (credentials) {
      return $http.post(apiUrlMapper.login, credentials);
    },
    logout: function () {
      return $http.get(apiUrlMapper.logout);
    },
    getBooks: function () {
      return $http.get(apiUrlMapper.getBooks);
    },
    getAuthors: function () {
      return $http.get(apiUrlMapper.getAuthors);
    },
    addAuthor: function (author) {
      return $http.post(apiUrlMapper.addAuthor, author);
    },
    getCSRF: function () {
      return $http.get(apiUrlMapper.login);
    }
  };
}]);

