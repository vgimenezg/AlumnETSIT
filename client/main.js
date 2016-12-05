import angular from 'angular';
import angularMeteor from 'angular-meteor';
import ngMaterial from 'angular-material';
import example from '../imports/components/example/example';

// Declaración del módulo principal de la aplicación, con sus dependencias. Registro de los componentes de prueba (config, controller).
angular.module('proTic', [
    angularMeteor,
    ngMaterial
])
.config(testConfig)
.controller("TestController", testController);

// Función de configuración de prueba, proveedor de iconos y de temas. Conveniente separar en otro fichero.
function testConfig($mdIconProvider, $mdThemingProvider) {
    'ngInject';

    // https://material.io/icons/
    const iconPath = '/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/';
    $mdIconProvider
    .iconSet('social', iconPath + 'svg-sprite-social.svg')
    .iconSet('action', iconPath + 'svg-sprite-action.svg')
    .iconSet('communication', iconPath + 'svg-sprite-communication.svg')
    .iconSet('content', iconPath + 'svg-sprite-content.svg')
    .iconSet('toggle', iconPath + 'svg-sprite-toggle.svg')
    .iconSet('navigation', iconPath + 'svg-sprite-navigation.svg')
    .iconSet('image', iconPath + 'svg-sprite-image.svg');

    // https://material.google.com/style/color.html
    $mdThemingProvider
    .theme("default")
    .primaryPalette("green")
    .accentPalette("amber");

}

// Controlador de prueba. Conviene separar en otro fichero.
function testController($scope, $mdSidenav, $window) {
    $scope.title = "ProTic";
    $scope.name = "Anónimo";
    $scope.openMenu = function () {
        $mdSidenav("menu-sidenav").toggle();
    }
    $scope.showAlert = function(text) {
        $window.alert(text);
    }
}

// Asocia el módulo de la aplicación al 'document'.
function onReady() {
  angular.bootstrap(document, ['proTic']);
}

// Llama a la función de bootstrapping en el evento de carga para cada caso (web, móvil).
if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}
