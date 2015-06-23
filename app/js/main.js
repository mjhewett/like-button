;(function (){

  'use strict';


angular.module('likesOnLikes', [])

.controller('likeControl', ['$scope', function ($scope) {

  $scope.allLikes = [];


var Liked = function(count) {

  this.count = 0;



};


$scope.moreLikes = function(x) {

  var l = new Liked();

  l.count = +1;

    $scope.allLikes.push(l);


};



    $scope.wow = function(x){


    return $scope.allLikes.length;

    };

  }]);




}());

