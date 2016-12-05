import angular from 'angular';
import angularMeteor from 'angular-meteor';
import example from '../imports/components/example/example';

angular.module('example', [
    angularMeteor,

]);

function onReady() {
  angular.bootstrap(document, ['example']);
}
 
if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}