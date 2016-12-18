import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './register.html';
import './register.css'


export default angular.module('register', [
  angularMeteor
]).component('register', {
    templateUrl: 'imports/components/register/register.html',
})
 .controller("RegisterCtrl", RegisterCtrl);

function RegisterCtrl($scope) {
  
}