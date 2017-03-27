import angular from 'angular';
import template from './info_request.html';

export default class InfoRequestCtrl {
    constructor($scope) {
        $scope.viewModel(this);
        $scope.$emit('showMenuButton', true);
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
