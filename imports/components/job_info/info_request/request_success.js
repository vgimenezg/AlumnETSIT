import angular from 'angular';
import template from './request_success.html';

export default class RequestSuccessCtrl {
    constructor($scope) {
        $scope.viewModel(this);
        $scope.$emit('showMenuButton', true);
        $scope.$emit('showBackButton', false);
        
        $scope.greeting = {
            text:'¡Solicitud Enviada!',
            icon:'check_circle'
        };
        
        $scope.info = {
                first: 'Tu solicitud ha sido enviada correctamente. Te notificaremos cuando haya una respuesta',
                second: '¿Qué quieres hacer ahora...?'
        };

        $scope.button = {
            options: [
                    {label: "Home", link: "/home", icon: "home"},
                    {label: "Búsqueda", icon: "search", link: "/searcher"},
                    {label: "Área de Intercambio", icon: "repeat", link: "/interchange_area"}
            ],
        };
    }
}