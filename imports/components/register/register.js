import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './register.html';
import './register.css'


export default angular.module('register', [
  angularMeteor
]).component('register', {
    templateUrl: 'imports/components/register/register.html',
})
    .controller("SwitchCtrl", SwitchCtrl)
    .controller("DatepickerCtrl",DatepickerCtrl)
    .controller("TecnhologyCtrl",TecnhologyCtrl);


function SwitchCtrl($scope) {
    $scope.data = {
        privacidad: 'Público',
    };
    $scope.message = 'Privado';
    $scope.onChange = function(state) {
      if (state) {
          $scope.message = 'Público';
      }else {
          $scope.message = 'Privado';
      }
    }
}

function DatepickerCtrl($scope) {
    $scope.myDate = new Date();
    $scope.maxDate = new Date();
}

function TecnhologyCtrl($scope, $element) {
    /*Sustituir por listado de tecnologias recogido de BBDD*/
    $scope.technologies = ['Php' ,'JavaScript' ,'Java' ,'MongoDB' ,'MySql', 'Go'];
    $scope.searchTerm;
    $scope.clearSearchTerm = function() {
        $scope.searchTerm = '';
    };
    $element.find('input').on('keydown', function(ev) {
          ev.stopPropagation();
    });
}