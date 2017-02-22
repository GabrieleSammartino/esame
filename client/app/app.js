var app = angular.module('esame', []);
app.controller('Controller',function($scope, $http, Service) {
    $scope.body = {
        flowerName: "flowerName",
        flowerScientificName: "flowerScientificName",
        flowerColor : "flowerColor",
        flowerInMedicine: "flowerInMedicine"
    };
    $scope.id = "";

    $scope.insert = function () {
        Service.create($scope.body)
            .then(function (response) {
                console.log("response:", response);
                $scope.update();
            })
    }

    $scope.update = function () {
        Service.getAll()
            .then(function (response) {
                $scope.flowers = response.data;

            })
    }
    $scope.modify = function () {
        Service.createPut($scope.id,$scope.body)
            .then(function (response) {
                console.log("response:", response);
                $scope.update();
            })
    }
    $scope.delete = function () {
        Service.idDelete($scope.id)
            .then(function (response) {
                console.log("response:", response);
                $scope.update();
            })
    }
    $scope.deleteflo = function (floid) {
        Service.idDelete(floid)
            .then(function (response) {
                console.log("response:", response);
                $scope.update();
            })
    }
});
app.factory('Service', ['$http', function ServiceFactory($http) {
    return {
        create:function(data){
            var url = "http://localhost:3000/flowers";
            return $http.post(url,data);
        },
        getAll:function(){
            var url = "http://localhost:3000/flowers";
            return $http.get(url);
        },
        createPut:function(id,data){
            var url = "http://localhost:3000/flowers/" + id;
            console.log (url);
            return $http.put(url,data);
        },
        idDelete:function(id){
            var url = "http://localhost:3000/flowers/" + id;
            console.log (url);
            return $http.delete(url);
        }
    }
}]);