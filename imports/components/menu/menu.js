import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './menu.html';

menuController.$inject = ["$scope", "$window"];
export default angular.module('menu', [
  angularMeteor
]).component('sidenavMenu', {
    templateUrl: 'imports/components/menu/menu.html',
}).controller("MenuController", menuController);

function menuController($scope, $window) {
    $scope.menu = {
        home: {
            options: [
                {name: "Buscador de perfiles", icon:  "search", href: "/searcher"},
                {name: "Área de intercambio", icon:  "repeat", href: "/interchange_area"}
            ]
        },
        profile: {
            options: [
                {name: "Editar mis datos de acceso", icon:  "person"},
                {name: "Editar experiencias", icon:  "edit", href: "/edit_experience"},
                {name: "Añadir experiencia", icon:  "add_circle", href: "/fullexperience"},
            ]
        },
        about: {
            options: [
                {name: "Términos y condiciones", icon:  "info"},
                {name: "Información control de privacidad", icon: "lock"}
            ]
        },
        session: {
            options: [
                {name: "Cerrar sesión", icon: "exit_to_app", href: "/welcome"},
            ]
        }
    };
    $scope.goTo = function (href) {
        if(href) $window.location.href = href;
    }
}
