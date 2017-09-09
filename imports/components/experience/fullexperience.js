import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './fullexperience.html';

export default angular.module('fullexperience', [
  angularMeteor
]).component('fullexperience', {
    templateUrl: 'imports/components/experience/fullexperience.html',
}).controller('FullExperienceCtrl', FullExperienceCtrl);

function FullExperienceCtrl($scope, $state) {
    $scope.$emit('showMenuButton', true);
    $scope.submit = function () {
        console.log($scope.newExperienceForm);
        if (!$scope.newExperienceForm.$invalid ){
           $state.go("experienceSuccess");
        }
    }
}