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


$scope.likes = function (){




};


    $scope.wow = function(x){

 if($scope.allLikes.length === 1){

    return 'Like : ' + $scope.allLikes.length;
  }else{
    return 'Likes : ' + $scope.allLikes.length;
  }

    };

  }]);




}());

