import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './searcher.html';

export default angular.module('profileSearcher', [
  angularMeteor
]).component('searcher', {
    templateUrl: 'imports/components/profiles/searcher.html',
}).controller("SearcherCtrl", SearcherCtrl);

function SearcherCtrl($scope) {
    $scope.searcher = {
        user: {
            options: [
                {name: "Nombre del Usuario", icon: "perm_identity"},
            ]
        },
        text: {
            title: "Características del Puesto",
            options: [
                {name: "Perfil / Función", icon: "assignment_ind"},
                {name: "Tecnología", icon: "build"},
                {name: "Empresa", icon: "business_center"}
            ]
        },
        time: {
            title: "Duración",
            icon : "history",
            options: [
                {name: "Meses"},
                {name: "Años"}
            ]
        },
        salary: {
            title: "Salario",
            icon :"euro_symbol",
            options: [
                {name: "Mínimo"},
                {name: "Máximo"}
            ]
        },
        button: {
            title: "Buscar",
            link: "/profiles_results",
            icon: "keyboard_arrow_right"
        }
    };
}
