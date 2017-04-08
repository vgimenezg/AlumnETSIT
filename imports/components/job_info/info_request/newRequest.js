import angular from 'angular';
import template from './info_request.html';

export default class NewRequestCtrl {
    constructor($scope, $mdDialog, $window) {
        $scope.viewModel(this);
        $scope.$emit('showMenuButton', true);
        $scope.newRequest = true;
        $scope.subtitle = "Nueva Solicitud";
        this.fields = [
            {name: "Nombre", offered: false, request: true},
            {name: "Perfil", offered: true, request: "public"},
            {name: "Empresa", offered: "public", request: "public"},
            {name: "Tecnologías", offered: false, request: false},
            {name: "Duración", offered: true, request: false},
            {name: "Sueldo", offered: true, request: true},
        ]
        
        this.historyTecnology = {name: "Tecnologías usadas", offered: false, request: false},
             
        this.comment = {
            name: "Comentario opcional"
        }
        
        $scope.showConfirm = function(ev) {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.confirm()
                  .title('Atención:')
                  .textContent('Tu solicitud va ser enviada. ¿Quieres Continuar?')
                  .ariaLabel('Lucky day')
                  .targetEvent(ev)
                  .ok('Si, Enviar')
                  .cancel('No');

            $mdDialog.show(confirm).then(function() {
              $scope.status = 'Yes';
                $window.location.href = '/request_success';
            }, function() {
              $scope.status = 'No';
            });
        };  
    } 
}
