import angular from 'angular';
import template from './info_request.html';

export default class InfoRequestCtrl {
    constructor($scope, $mdDialog, $window, $timeout) {
        $scope.viewModel(this);
        $scope.dealRequest = false;
        $scope.$emit('showMenuButton', true);
        $scope.subtitle = "Detalle de solicitud";
        this.fields = [
            {name: "Nombre"},
            {name: "Perfil"},
            {name: "Empresa"},
            {name: "Tecnologías"},
            {name: "Duración"},
            {name: "Sueldo"}
        ]

        $scope.toggleDeal = function() {
            $scope.dealRequest = !$scope.dealRequest;
        };
        
        $scope.showConfirm = function(ev) {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.confirm()
                  .title('Atención:')
                  .textContent('Tu solicitud de negociación va ser enviada. ¿Quieres Continuar?')
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
        
        $scope.showConfirmAnswer = function(ev, action) {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.confirm()
                  .title('Atención:')
                  .textContent('Vas a ' + action + ' la solicitud actual. La persona que realizó la petición de tu información podría ser notificada ¿Quieres Continuar?')
                  .ariaLabel('Lucky day')
                  .targetEvent(ev)
                  .ok('Si, ' + action)
                  .cancel('No');

            $mdDialog.show(confirm).then(function() {
              $scope.status = 'Yes';
                $window.location.href = '/interchange_area';
            }, function() {
              $scope.status = 'No';
            });
        };
    } 
}
