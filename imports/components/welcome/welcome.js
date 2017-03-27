import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './welcome.html';
import './welcome.css'

export default angular.module('welcome', [
    angularMeteor
    ]).component('welcome', {
        templateUrl: 'imports/components/welcome/welcome.html',
    }).controller('welcomeCtrl', WelcomeCtrl
    ).directive('intro', function() {
        return {
            template: '<p>{{info.first}}</p><p>{{info.second}}</p>'
        }
    });

function WelcomeCtrl($scope) {
    $scope.$emit('showMenuButton', false);
    $scope.info = {
            first: 'Bienvenido al portal en el que podrás conocer el estado del mercado laboral del sector TIC y con el que cnocerás el verdadero valor que tiene tu trabajo.',
            second: 'Te invitamos a que participes en el intercambio de información entre ususarios de la comunidad, donde tú eliges qué y con quién compartes tus datos.'
    };
    $scope.button = {
        options: [
                {label: "Iniciar Sesion", link: "/init_sesion", icon: "power_settings_new"},
                {label: "Registrarse", link: "/register", icon: "assignment"}
            ],
    };
};
