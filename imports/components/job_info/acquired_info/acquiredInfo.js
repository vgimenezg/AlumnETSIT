import angular from 'angular';
import template from './acquired_info.html';

export default class AcquiredInfoCtrl {
    constructor($scope) {
        $scope.$emit('showMenuButton', true);
        $scope.viewModel(this);
        this.elems = [
            {first: "Analista", second: "Empresa: Indra S.A.", third: "19000€ brutos/año", style: "md-3-line"},
            {first: "Programador", second: "Java, Javascript", style: "md-2-line"},
            {first: "Empresa: Accenture", second: "23000€ brutos/año", third: "Duración: 4 años", style: "md-2-line"},
            {first: "Analista", second: "21000€ brutos/año", third: "Duración: 3 años", style: "md-3-line"},
            {first: "Otro", second: "21000€ brutos/año", third: "Duración: 3 años", style: "md-3-line"},
        ];
    }
}
