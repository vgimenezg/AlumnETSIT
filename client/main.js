import angular from 'angular';
import angularMeteor from 'angular-meteor';
import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';

// Custom Components
import register from '../imports/components/register/register';
import header from '../imports/components/header/header';
import example from '../imports/components/example/example';
import viewIndex from '../imports/components/view_index/view_index';
import jobInfoRequest from '../imports/components/job_info_request/job_info_request';

// Declaración del módulo principal de la aplicación, con sus dependencias. Registro de los componentes de prueba (config, controller).
angular.module('proTic', [
    angularMeteor,
    uiRouter,
    example.name,
    viewIndex.name,
    jobInfoRequest.name,
    ngMaterial
])
.config(routeConfig)
.config(materialConfig)
.controller("AppController", appController);

// Función de configuración de Material Angular, proveedor de iconos y de temas. Conveniente separar en otro fichero.
function materialConfig($mdIconProvider, $mdThemingProvider) {
    'ngInject';

    // https://material.io/icons/
    const iconPath = 'http://localhost:3000/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/';
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
    .accentPalette("light-blue");

}

// Función de configuración de Angular Route. Conveniente separar en otro fichero.
function routeConfig($locationProvider, $urlRouterProvider, $stateProvider) {
    'ngInject';
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/index');
    $stateProvider.state('viewIndex', {url: '/index', template: '<view-index></view-index>'});
    $stateProvider.state('jobInfoRequest', {url: '/job_info_request', template: '<job-info-request></job-info-request>'});

}

// Controlador de prueba. Conviene separar en otro fichero.
function appController($scope, $mdSidenav, $window) {
    $scope.title = "ProTic";
    $scope.openMenu = function () {
        $mdSidenav("menu-sidenav").toggle();
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