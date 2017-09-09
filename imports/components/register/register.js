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

function RegisterCtrl($scope, $state) {
    $scope.$emit('showMenuButton', false);
    $scope.showStudent = false;
    $scope.shouldShowStudent = function(value) {
        $scope.showStudent = value;   
    }
    $scope.submit = function () {
        console.log($scope.registerForm);
        if (!$scope.registerForm.$invalid ){
           $state.go("success");
        }
    }
}