import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './init_sesion.html';


export default angular.module('initSesion', [
  angularMeteor
]).component('initSesion', {
    templateUrl: 'imports/components/init/init_sesion.html',
}).controller('InitSesionCtrl', InitSesionCtrl);

function InitSesionCtrl($scope, $state) {
    $scope.$emit('showMenuButton', false);
    
    $scope.submit = function () {
        if (!$scope.loginForm.$invalid ){
            $state.go("home");
        }
    }
}
