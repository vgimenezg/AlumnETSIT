import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './success.html';


export default angular.module('registerSuccess', [
    angularMeteor
    ]).component('success', {
        templateUrl: 'imports/components/register/success.html',
    }).controller('registerSuccessCtrl', ['$scope', function($scope) {
        $scope.greeting = '¡Registro Completado!';
        $scope.info = {
            first: 'Podrás modificar tus datos en cualquier momento desde la sección Mi Perfil que encontrarás en el menú lateral.',
            second: 'Te invitamos a que incluyas experiencias anteriores a tu puesto actual, con las que a cambio, conseguirás mas información de otros usuarios desde el Área de Intercambio'
        };
    }]).directive('info', function() {
        return {
            template: '<p>{{info.first}}</p><p>{{info.second}}</p>'
        };
    });

