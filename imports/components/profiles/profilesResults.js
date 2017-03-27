import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './profiles_results.html';
class ProfilesResultsCtrl {
    constructor($scope) {
        $scope.$emit('showBackButton', true);
        $scope.$emit('showMenuButton', false);
        $scope.viewModel(this);
        this.params = ["Java", "Analista", "Indra", "1 año y 3 meses", "28.000"];
        this.results = [[
            {name: "Categoría", value: "Analista"},
            {name: "Empresa", value: "Indra"},
            {name: "Salario", value: "19000€ brutos/año"},
            {name: "Tecnologías", value: "Java, Javascript"},
            {name: "Duración", value: "3 años"}
        ], [
            {name: "Experiencia", value: "5 años"},
            {name: "Tecnología", value: "Java"}
        ]];
    }
}
export default angular.module('profiles', [
    angularMeteor
])
.component('profilesResults', {
    templateUrl: 'imports/components/profiles/profiles_results.html',
    controller: ['$scope', ProfilesResultsCtrl]
});
