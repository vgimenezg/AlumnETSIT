import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './welcome.html';
import './welcome.css'

export default angular.module('welcome', [
  angularMeteor
]).component('welcome', {
    templateUrl: 'imports/components/welcome/welcome.html',
});
