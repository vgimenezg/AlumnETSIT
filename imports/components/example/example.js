import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './example.html';
class ExampleCtrl {
    constructor($scope, $window) {
        $scope.viewModel(this);
        this.name = "Anónimo";
        this._$window = $window;
    }
    showAlert(text) {
        this._$window.alert(text);
    }
}
export default angular.module('example', [
    angularMeteor
])
.component('example', {
    templateUrl: 'imports/components/example/example.html',
    controller: ['$scope', '$window', ExampleCtrl]
});
