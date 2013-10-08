'use strict';

angular.module('angularIssuesApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.loadIssues = function() {
      $http.defaults.headers.common['Authorization'] = 'Basic ' + Base64.encode($scope.username + ':' + $scope.password);

    };
  });
