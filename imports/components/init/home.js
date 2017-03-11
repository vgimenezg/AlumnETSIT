import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './home.html';


export default angular.module('home', [
    angularMeteor
]).component('home', {
    templateUrl: 'imports/components/init/home.html',
}).controller('HomeCtrl', HomeCtrl);

function HomeCtrl($scope) {
    $scope.titleSearchButton = 'Buscador';
    $scope.infoSearch = 'Obtén información sobre otros perfiles a través  del Buscador';
    $scope.titleExchangeButton = 'Área de Intercambio';
    $scope.infoExchange = 'Accede a tu Área de Intercambio de Información';
}
