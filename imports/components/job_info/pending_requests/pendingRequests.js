import angular from 'angular';
import template from './pending_requests.html';

export default class PendingRequestsCtrl {
    constructor($scope) {
        $scope.viewModel(this);
        this.elems = [
            {type: "sended", to: "PacoGL", state: "waiting", date: new Date()},
            {type: "received", from: null, state: "ready", date: new Date()},
        ];
        this.filters = {sended: true, received: true};
    }
}
