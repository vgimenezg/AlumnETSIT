import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './job_info_request.html';
class JobInfoRequestCtrl {
    constructor($scope) {
        $scope.viewModel(this);
        this.fields = [
            {name: "Nombre"},
            {name: "Perfil"},
            {name: "Empresa"},
            {name: "Tecnologías"},
            {name: "Duración"},
            {name: "Sueldo"}
        ]
    }
}
export default angular.module('jobInfoRequest', [
    angularMeteor
])
.component('jobInfoRequest', {
    templateUrl: 'imports/components/job_info_request/job_info_request.html',
    controller: ['$scope', JobInfoRequestCtrl]
});
