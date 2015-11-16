'use strict';

/**
 * @ngdoc function
 * @name ecampus20App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ecampus20App
 */
angular.module('ecampus20App', [])
  .controller('MainCtrl', function ($scope) {
    $scope.campus = [
        {'name': 'lille'},
        {'name': 'arras'}
    ];
    $scope.classes = [
        {'name': 'b1'},
        {'name': 'b2'},
        {'name': 'b3'},
        {'name': 'i4'},
        {'name': 'i5'}
    ];
  });
