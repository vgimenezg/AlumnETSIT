import angular from 'angular';
import template from './info_details.html';

export default class InfoDetailsCtrl {
    constructor($scope) {
        $scope.viewModel(this);
        $scope.$emit('showMenuButton', true);
        $scope.$emit('showBackButton', true);
        this.info = {
            from: "Paco",
            sended: {
                job: {name: "Puesto", value: "Programador"},
                company: {name: "Empresa", value: "Atos"},
                salary: {name: "Salario", value: "23000€ brutos/año"},
            },
            received: {
                job: {name: "Puesto", value: "Analista"},
                company: {name: "Empresa", value: "Indra"},
                salary: {name: "Salario", value: "19000€ brutos/año"},
                technologies: {name: "Tecnologías", value: "Java, Javascript"},
                duration: {name: "Duración", value: "3 años"}
            }
        };
    }
}
