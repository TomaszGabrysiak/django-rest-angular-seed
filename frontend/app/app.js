/**
 * Created by Tomasz Gabrysiak on 2016-03-12.
 */


var app = angular.module("myRestApp", []);

app.controller("myRestAppCtrl", function($scope) {
  $scope.books = ["Book 1", "Book 2"];
  $scope.authors = ["Author 1", "Author 2", "Author 3", "Author 4"];
});

