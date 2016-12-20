import angular from 'angular';
import template from './pending_requests.html';

export default class PendingRequestsCtrl {
    constructor($scope) {
        $scope.viewModel(this);
    }
}
