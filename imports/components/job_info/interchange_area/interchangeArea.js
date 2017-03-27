import angular from 'angular';
import template from './interchange_area.html';

export default class InterchangeAreaCtrl {
    constructor($scope) {
        $scope.viewModel(this);
        $scope.$emit('showMenuButton', true);
        $scope.$emit('showBackButton', false);
    }
}
