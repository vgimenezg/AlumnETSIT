import angular from 'angular';
import template from './info_request.html';

export default class NewRequestCtrl {
    constructor($scope, $mdDialog, $window) {
        $scope.viewModel(this);
        $scope.$emit('showMenuButton', true);
        $scope.newRequest = true;
        $scope.subtitle = "Nueva Solicitud";
        this.fields = [
            {name: "Nombre"},
            {name: "Perfil"},
            {name: "Empresa"},
            {name: "Tecnologías"},
            {name: "Duración"},
            {name: "Sueldo"}
        ] 
    
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
                $window.location.href = '/profiles_results';
            }, function() {
              $scope.status = 'No';
            });
        };
    } 
}
