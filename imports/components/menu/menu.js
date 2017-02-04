import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './menu.html';

menuController.$inject = ["$scope"];
export default angular.module('menu', [
  angularMeteor
]).component('sidenavMenu', {
    templateUrl: 'imports/components/menu/menu.html',
}).controller("MenuController", menuController);

function menuController($scope) {
    $scope.menu = {
        home: {
            name: "Home",
            options: [
                {name: "Buscador de perfiles"},
                {name: "Área de intercambio"}
            ]
        },
        profile: {
            name: "Mi perfil",
            options: [
                {name: "Editar mis datos de acceso"},
                {name: "Editar datos o privacidad"},
                {name: "Añadir experiencia"},
            ]
        },
        about: {
            name: "Acerca de",
            options: [
                {name: "Términos y condiciones"},
                {name: "Info control de privacidad"}
            ]
        },
        session: {
            name: "Sesión",
            options: [
                {name: "Cerrar sesión"},
            ]
        }
    };
}
