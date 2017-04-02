import angular from 'angular';
import angularMeteor from 'angular-meteor';
import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';

// Custom Components
import register from '../imports/components/register/register';
import header from '../imports/components/header/header';
import menu from '../imports/components/menu/menu';
import example from '../imports/components/example/example';
import viewIndex from '../imports/components/view_index/view_index';
import jobInfo from '../imports/components/job_info/jobInfo';
import profiles from '../imports/components/profiles/profilesResults';
import experience from '../imports/components/experience/experience';
import student from '../imports/components/experience/student';
import experienceSuccess from '../imports/components/experience/experience_success';
import fullexperience from '../imports/components/experience/fullexperience';
import editexperience from '../imports/components/experience/editexperience';
import welcome from '../imports/components/welcome/welcome';
import initSesion from '../imports/components/init/init_sesion';
import registerSuccess from '../imports/components/register/success';
import home from '../imports/components/init/home';
import profileSearcher from '../imports/components/profiles/searcher';

// Declaración del módulo principal de la aplicación, con sus dependencias. Registro de los componentes de prueba (config, controller).
angular.module('proTic', [
    angularMeteor,
    uiRouter,
    example.name,
    header.name,
    menu.name,
    profiles.name,
    register.name,
    viewIndex.name,
    jobInfo.name,
    experience.name,
    student.name,
    fullexperience.name,
    welcome.name,
    initSesion.name,
    registerSuccess.name,
    home.name,
    profileSearcher.name,
    experienceSuccess.name,
    editexperience.name,
    ngMaterial
])
.config(routeConfig)
.config(materialConfig)
.controller("globalController", globalController);;

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
    $urlRouterProvider.otherwise('/welcome');
    $stateProvider.state('viewIndex', {url: '/index', template: '<view-index></view-index>'});
    $stateProvider.state('infoRequest', {url: '/info_request', template: '<info-request></info-request>'});
    $stateProvider.state('infoDetails', {url: '/info_details', template: '<info-details></info-details>'});
    $stateProvider.state('profilesResults', {url: '/profiles_results', template: '<profiles-results></profiles-results>'});
    $stateProvider.state('interchangeArea', {url: '/interchange_area', template: '<interchange-area></interchange-area>'});
    $stateProvider.state('register', {url: '/register', template: '<register></register>'});
    $stateProvider.state('fullexperience', {url: '/fullexperience', template: '<fullexperience></fullexperience>'});
    $stateProvider.state('welcome', {url: '/welcome', template: '<welcome></welcome>'});
    $stateProvider.state('initSesion', {url: '/init_sesion', template: '<init-sesion></init-sesion>'});
    $stateProvider.state('success', {url: '/register_success', template: '<success></success>'});
    $stateProvider.state('home', {url: '/home', template: '<home></home>'});
    $stateProvider.state('searcher', {url: '/searcher', template: '<searcher></searcher>'});
    $stateProvider.state('experienceSuccess', {url: '/experience_success', template: '<experience-success></experience-success>'});
    $stateProvider.state('requestSuccess', {url: '/request_success', template: '<request-success></request-success>'});
    $stateProvider.state('newRequest', {url: '/new_request', template: '<new-request></new-request>'});
    $stateProvider.state('editexperience', {url: '/edit_experience', template: '<editexperience></editexperience>'});   
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

function globalController($scope) {
    $scope.$on('showBackButton', function(event, data) { 
        $scope.$broadcast('showBackButtonHeader', data);
    });
    $scope.$on('showMenuButton', function(event, data) { 
        $scope.$broadcast('showMenuButtonHeader', data);
    });
    
    
}
