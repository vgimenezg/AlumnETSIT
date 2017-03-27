import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './student.html';


export default angular.module('student', [angularMeteor])
    .component('student', { templateUrl: 'imports/components/experience/student.html',
})
    .controller("StudentCtrl", StudentCtrl);

function StudentCtrl($scope, $element) {
   $scope.courses = [
          "1º",
          "2º",
          "3º",
          "4º",
            "Realizando Prácticas",
            "Realizando TFG"
      ];
}
    
    