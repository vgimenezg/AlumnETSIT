import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './editexperience.html';

export default angular.module('editexperience', [
  angularMeteor
]).component('editexperience', {
    templateUrl: 'imports/components/experience/editexperience.html',
}).controller('EditExperienceCtrl', EditExperienceCtrl);

function EditExperienceCtrl($scope, $state) {
    $scope.$emit('showMenuButton', true);
    $scope.$emit('showBackButton', true);
    $scope.$broadcast('isEditExperience', true);
    $scope.isEdit = true;
    $scope.allExperiences = [
        {id: 1, alias:"Practicas", company:"Indra"},
        {id: 2, alias:"Progamador", company:"Indra"},
        {id: 3, alias:"Analista", company:"Inchoo"},
    ]
    $scope.submit = function () {
        if (!$scope.editExperienceForm.$invalid ){
           $state.go("experienceSuccess");
        }
    }
}