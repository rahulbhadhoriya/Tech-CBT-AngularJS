// JavaScript source code
var app = angular.module("app", []);
app.controller("emp", ["$scope", "calcFactory", function($scope, calcFactory) {
    $scope.a = 10;
    $scope.b = 20;


    $scope.doSum = function() {
        // $scope.sum = calcFactory.getSum($scope.a, $scope.b);
        calcFactory.getSum($scope.a, $scope.b, function(r) {
            $scope.sum = r;
        });

    };
}]);
app.factory("calcFactory", ["$http", "$log", function($http, $log) {
    $log.log("instantiating calcFactory...");
    var oCalcService = {};
    /* oCalcService.getSum = function(a, b) {
         return parseInt(a) + parseInt(b);

     };*/
    oCalcService.getSum = function(a, b, cb) {
        var s = parseInt(a) + parseInt(b);
        cb(s);
    };
    return oCalcService;
}])