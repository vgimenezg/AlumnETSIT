import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './experience_success.html';


export default angular.module('experienceSuccess', [
    angularMeteor
    ]).component('experienceSuccess', {
        templateUrl: 'imports/components/experience/experience_success.html',
    }).controller('addExperienceCtrl', addExperienceCtrl
    );

function addExperienceCtrl($scope) {
    console.log($scope);
    $scope.greeting = {
        text:'¡Experiencia guardada!',
        icon:'check_circle'
    };
        
    $scope.info = {
            first: 'Tus datos han sido procesados correctamente.',
            second: '¿Qué quieres hacer ahora...?'
    };

    $scope.button = {
        options: [
                {label: "Home", link: "/home", icon: "home"},
                {label: "Añadir Experiencia", link: "/fullexperience", icon: "add"}
        ],
    };
};