angular.module("minhaApp")

.controller("meuController", ['$scope', function($scope) {

    $scope.nome = "";

    $scope.lista = [];

    $scope.adicionar = function(){
        $scope.lista.push($scope.nome);
        $scope.nome = "";
    }

    $scope.remover = function(index){
        $scope.lista.splice(index, 1);
    }

}])