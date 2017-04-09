import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './profiles_results.html';
class ProfilesResultsCtrl {
    constructor($scope) {
        $scope.$emit('showBackButton', true);
        $scope.$emit('showMenuButton', false);
        $scope.viewModel(this);
        this.params = ["Java", "Analista", "Indra", "1 año y 3 meses", "28.000"];
        
        this.infoOptions = [
                {name: "name", label:"Nombre", icon: "perm_identity"},
                {name: "position", label:"Perfil", icon: "assignment_ind"},
                {name: "tecnology", label:"Tecnologías", icon: "build"},
                {name: "company", label:"Empresa", icon: "business_center"},
                {name: "duration", label:"Duración", icon : "history"},
                {name: "salary",label:"Salario", icon : "euro_symbol"},
        ];
        
       this.results = [[
            {name: "position", value: "Analista"},
            {name: "company", value: "Indra"},
            {name: "salary", value: "19000€ brutos/año"},
        ], [
            {name: "name", value: "Pedro"},
            {name: "duration", value: "5 años"},
            {name: "tecnology", value: "Java"}
        ], [
            {name: "position", value: "Desarrollador"},
            {name: "tecnology", value: "Java, Javascript"},
            {name: "duration", value: "3 años"}
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
