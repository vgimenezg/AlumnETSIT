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
            {name: "name", value: "Pedro", label:"Nombre", icon: "perm_identity", private:true },
            {name: "position", value: "Analista", label:"Perfil", icon: "assignment_ind", private:false},
            {name: "company", value: "Indra",label:"Empresa", icon: "business_center", private:false},
            {name: "tecnology", value: "Java", label:"Tecnologías", icon: "build", private:false},
            {name: "duration", value: "5 años", label:"Duración", icon : "history", private:true},
            {name: "salary", value: "19000€ b/año",label:"Salario", icon : "euro_symbol", private:false},
        ], [
            {name: "name", value: "Pedro", label:"Nombre", icon: "perm_identity", private:false},
            {name: "position", value: "Analista", label:"Perfil", icon: "assignment_ind", private:false},
            {name: "company", value: "Indra",label:"Empresa", icon: "business_center", private:true},
            {name: "tecnology", value: "Java", label:"Tecnologías", icon: "build", private:false},
            {name: "duration", value: "5 años", label:"Duración", icon : "history", private:false},
            {name: "salary", value: "19000€ b/año",label:"Salario", icon : "euro_symbol", private:true},
        ], [
            {name: "name", value: "Pedro", label:"Nombre", icon: "perm_identity", private:false},
            {name: "position", value: "Analista", label:"Perfil", icon: "assignment_ind", private:true},
            {name: "company", value: "Indra",label:"Empresa", icon: "business_center", private:true},
            {name: "tecnology", value: "Java", label:"Tecnologías", icon: "build", private:true},
            {name: "duration", value: "5 años", label:"Duración", icon : "history", private:false},
            {name: "salary", value: "19000€ b/año",label:"Salario", icon : "euro_symbol", private:false},
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
